const express = require("express");

const app = express();

const port = 5000;

const { MongoClient } = require("mongodb");
const Db = "mongodb://localhost:27017";

app.listen(port, () => console.log("Listening on port 5000"));
