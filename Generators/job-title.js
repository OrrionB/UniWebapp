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

      // Specify the database you want to access
      const db = client.db("Webapp_Project");

      console.log(`MongoDB Connected: ${url}`);
      const jobsCollection = db.collection("JobTitles");
      jobsCollection.find().toArray(async (err, results) => {
        const jobResult = await jobsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of jobResult) {
          console.log("inside job function", doc.JobTitles); //this is the field name of the database collection
          Promise.resolve(doc.JobTitles);
        }
      });
    }
  );
}

module.exports = jobGenerator;
