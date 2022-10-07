const express = require("express");
const cors = require("cors");

const app = express();

const port = 5000;

const MongoClient = require("mongodb").MongoClient;

const nameGenerator = require("./Generators/name");

// Connect URL to MongoDB
const url = "mongodb://localhost:27017";

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Connect to MongoDB
MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, MongoClient) => {
    if (err) {
      return console.log(err);
    }

    // Specify the database you want to access
    const db = MongoClient.db("Webapp_Project");

    console.log(`MongoDB Connected: ${url}`);
  }
);

app.listen(port, () => console.log("Listening on port 5000"));
// tom says use a fetch request to get this function from the database

app.get("/name", async (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let name;
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
          name = doc.Names;
          res.send({ name: doc.Names });
          Promise.resolve(doc.Names);
        }
      });
    }
  );
});
