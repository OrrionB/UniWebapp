//Name Generator

async function nameGenerator() {
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
      const namesCollection = db.collection("Names");
      namesCollection.find().toArray(async (err, results) => {
        const nameResult = await namesCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of nameResult) {
          console.log("inside name function", doc.Names);
          Promise.resolve(doc.Names);
        }
      });
    }
  );
}

module.exports = nameGenerator;
