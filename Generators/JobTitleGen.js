//Job Generator

async function jobGenerator() {
  const MongoClient = require("mongodb").MongoClient;

  const url = "mongodb://127.0.0.1:27017";

  // Connect to MongoDB
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        return console.log(err);
      }
      const db = client.db("Webapp_Project");

      const jobsCollection = db.collection("JobTitles");
      jobsCollection.find().toArray(async (err, results) => {
        const jobResult = await jobsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of jobResult) {
          Promise.resolve(doc.JobTitles);
        }
      });
    }
  );
}

module.exports = jobGenerator;
