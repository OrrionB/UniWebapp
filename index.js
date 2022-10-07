const express = require("express");

const app = express();

const port = 5000;

const MongoClient = require("mongodb").MongoClient;

// Connect URL to MongoDB
const url = "mongodb://localhost:27017";

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
