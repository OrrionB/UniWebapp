// FunFact2 Generator

async function fact2Generator() {
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
  
        const factsCollection = db.collection("FunFacts");
        factsCollection.find().toArray(async (err, results) => {
          const factsResult = await factsCollection.aggregate([
            { $sample: { size: 1} },
          ]);
          for await (const doc of factsResult) {
            Promise.resolve(doc.FunFact);
          }
        });
      }
    );
  }
  
  module.exports = fact2Generator;
  