const express = require("express");

const cors = require("cors");
const app = express();
const port = 5000;

const MongoClient = require("mongodb").MongoClient;

const bodyParser = require("body-parser");

app.use(bodyParser.json());
const bodyParser = require("body-parser");

app.use(bodyParser.json());
// Connect URL to MongoDB
const url = "mongodb://localhost:27017";

//CORS allows us to read packages from the API in the front end as they originate from a different server (3000 to 5000)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// fake password and username databasing for the time being
const fakeData = {
  tom: {
    password: "cookie",
  },
  phil: {
    password: "phil",
  },
  chloe: {
    password: "fill",
  },
};

//variables used in multiple functions, so have been placed outside to prevent block scoping issues
let incorrectPassword = false;
let userExistsInDb = false;

const userIsValid = (requestUsername, fakeData, requestPassword) => {
  // check if the request username exists in the DB
  userExistsInDb = requestUsername in fakeData;
  if (userExistsInDb) {
    //it exists in the database
    const user = fakeData[requestUsername];
    if (user.password === requestPassword) {
      incorrectPassword = false;
      // the password is not incorrect
      return true;
    } else {
      // the password inputted is incorrect
      incorrectPassword = true;
      return false;
    }
  } else {
    //username inputted is incorrect
    return false;
  }
  // validate the password
};

//  POST /login to verify customer details

app.post("/login", (req, res) => {
  const validUser = userIsValid(req.body.username, fakeData, req.body.password);
  if (validUser) {
    res.status(200).send({ response: "Authenticated" });
  } else if (userExistsInDb != true) {
    res.status(402).send({ response: "Incorrect Username" });
  } else {
    res.status(401).send({ response: "Incorrect Password" });
  }
});
// fake password and username databasing for the time being
const fakeData = {
  tom: {
    password: "cookie",
  },
  phil: {
    password: "phil",
  },
  chloe: {
    password: "fill",
  },
};

//variables used in multiple functions, so have been placed outside to prevent block scoping issues
let incorrectPassword = false;
let userExistsInDb = false;

const userIsValid = (requestUsername, fakeData, requestPassword) => {
  // check if the request username exists in the DB
  userExistsInDb = requestUsername in fakeData;
  if (userExistsInDb) {
    //it exists in the database
    const user = fakeData[requestUsername];
    if (user.password === requestPassword) {
      incorrectPassword = false;
      // the password is not incorrect
      return true;
    } else {
      // the password inputted is incorrect
      incorrectPassword = true;
      return false;
    }
  } else {
    //username inputted is incorrect
    return false;
  }
  // validate the password
};

//  POST /login to verify customer details

app.post("/login", (req, res) => {
  const validUser = userIsValid(req.body.username, fakeData, req.body.password);
  if (validUser) {
    res.status(200).send({ response: "Authenticated" });
  } else if (userExistsInDb != true) {
    res.status(402).send({ response: "Incorrect Username" });
  } else {
    res.status(401).send({ response: "Incorrect Password" });
  }
});

// Connect to MongoDB
MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  //This allows the console to return an error if there is an issue connecting
  (err, MongoClient) => {
    if (err) {
      return console.log(err);
    }
    const db = MongoClient.db("Webapp_Project");
    //The below line logs to the console in order to show it is connected to the DB.
    console.log(`MongoDB Connected: ${url}`);
  }
);

app.listen(port, () => console.log("Listening on port 5000"));

//Get request for Name Generator
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

// get request for Race Generator
app.get("/Race", async (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let race;
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

      console.log(`MongoDB Connected: ${url}`);
      const racesCollection = db.collection("Races");
      racesCollection.find().toArray(async (err, results) => {
        const raceResult = await racesCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of raceResult) {
          console.log("inside race function", doc.Race);
          race = doc.Race;
          res.send({ race: doc.Race });
          Promise.resolve(doc.Race);
        }
      });
    }
  );
});

//Get request for Job Generator
app.get("/job", async (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let job;
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

      console.log(`MongoDB Connected: ${url}`);
      const jobsCollection = db.collection("JobTitles");
      jobsCollection.find().toArray(async (err, results) => {
        const jobResult = await jobsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of jobResult) {
          console.log("inside name function", doc.JobTitles);
          job = doc.JobTitles;
          res.send({ job: doc.JobTitles });
          Promise.resolve(doc.JobTitles);
        }
      });
    }
  );
});
