//Race Generator

async function raceGenerator() {
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
      const raceCollection = db.collection("Races");
      raceCollection.find().toArray(async (err, results) => {
        const raceResult = await raceCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of raceResult) {
          console.log("inside races function", doc.Race);
          Promise.resolve(doc.Race);
        }
      });
    }
  );
}

module.exports = raceGenerator;
