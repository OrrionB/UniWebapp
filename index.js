const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const path = require("path")
const bcrypt = require("bcrypt");
const saltRounds = 10

const MongoClient = require("mongodb").MongoClient;

const bodyParser = require("body-parser");

app.listen(port, () => console.log("Listening on port 5000"));

app.use(bodyParser.json());
// Connect URL to MongoDB
const url = "mongodb://localhost:27017";

//CORS allows us to read packages from the API in the front end as they originate from a different server (3000 to 5000)
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

//  POST /login to verify customer details

const sessions = require("express-session");
const MongoStore = require("connect-mongo")(sessions)
let username
// Basic usage
// this gives out the session to people
const oneDay = 1000 * 60 * 60 * 24

// this adds a session which is available for one day, which can collect and send data through to the front end 
app.use(sessions({
  secret: "someTopSecret",
  store: new MongoStore({
  url: "mongodb://127.0.0.1:27017/myTestSession",}),
  cookie: { 
    maxAge: oneDay,
    httpOnly: false,
    secure: false 
    },
  resave: true,
  saveUninitialized: false,
  SameSite:false
  })
  )
  
  
// this connects our project top MongoDB, where our data is storred
MongoClient.connect(
  "mongodb://127.0.0.1:27017",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    app.set("Webapp_Project", client.db("Webapp_Project"));
  }
);
      // // This allows us users to create accounts
      app.post("/signUp",  express.urlencoded({ extended: false }), function (req, res) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
        res.header('Access-Control-Allow-Methods: POST');
        res.header('Access-Control-Allow-Credentials: true')
        let newUsername = req.body.username;
        // this hashes the passwords to protect information being leaked
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        let hashedPwd = hash;
        let newUser = { Username: newUsername, password: hashedPwd };
        // this finds if the username already exists within the database
         app
          .set("Webapp_Project")
          .collection("users")
          .find({ Username: newUsername,  })
          .toArray(function (err, docs)
          { 
            // if the returned docs has a length of 0, it means that an account with that username does not currently exist, so one can be created
            if (docs.length === 0){
          app
          .get("Webapp_Project")
          .collection("users")
          .insertOne(newUser, function (err, dbResp){
          res.send({'response':'account created'})
          }
           )}

           else {if (err) {
                console.error(err);
              }if (docs.length > 0) {
                res.send({'response':'this user already exists'})
                }}})})})


  //  POST /login to verify customer details
  app.post("/login",  express.urlencoded({ extended: false }), function (req, res) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
    res.header('Access-Control-Allow-Methods: POST');
    res.header('Access-Control-Allow-Credentials: true')
    let username = req.body.username;
    let password = req.body.password;
    app
      .set("Webapp_Project")
      .collection("users")
      .find({ Username: username })
      .toArray(function (err, docs)
      {
        if (docs.length === 0) {
          res.send({'response':'wrong username'});
        }
        if (docs.length > 0) {
          ///////
          bcrypt.compare(req.body.password, docs[0].password, function (
            err,
            result
          ) { 
            if (!result) {res.send({'response':'wrong password'})} 
            else {
                req.session.cookie.user = req.body.username
                  req.session.cookie.authorised = true
                  req.session.save(function (err) {
                  if (err) return next(err)
                  res.send({'response':'log in successful'}) 
                  })
                
            }
          });
        } 
      });})

      app.get("/load",  express.urlencoded({ extended: false }), function (req, res) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
        res.header('Access-Control-Allow-Methods: POST');
        res.header('Access-Control-Allow-Credentials: true')
        app
          .set("Webapp_Project")
          .collection("CreatedCharacters")
          .find({ Username: username })
          .toArray(function (err, docs)
          {
            if (docs.length === 0) {
              res.send({'response':"no saved character"});
            } else res.send({docs})})})

      app.post("/load",  express.urlencoded({ extended: false }), function (req, res) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
        res.header('Access-Control-Allow-Methods: POST');
        res.header('Access-Control-Allow-Credentials: true')
        let chosenClass = req.body.class
        let chosenRace = req.body.race
        let chosenName = req.body.name
        let chosenJob = req.body.job
        let chosenFact = req.body.fact
        let chosenFact2 = req.body.fact2
        let chosenFact3 = req.body.fact3
        let chosenStats = req.body.stats
        let username = req.body.username
        // console.log(req.body)
        
      app
          .set("Webapp_Project")
          .collection("CreatedCharacters")
          .find({ username: username, race: chosenRace, name: chosenName, class: chosenClass, job: chosenJob, fact: chosenFact, fact2: chosenFact2, fact3: chosenFact3, stats: chosenStats})
          .toArray(function (err, docs)
          {
            if (docs.length === 0) {
              res.send({'response':"no saved character"});
                } else res.send({docs})})})

  app.post("/load",  express.urlencoded({ extended: false }), function (req, res) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
        res.header('Access-Control-Allow-Methods: POST');
        res.header('Access-Control-Allow-Credentials: true')
        let chosenClass = req.body.class
        let chosenRace = req.body.race
        let chosenName = req.body.name
        let chosenJob = req.body.job
        let chosenFact = req.body.fact
        let chosenFact2 = req.body.fact2
        let chosenFact3 = req.body.fact3
        let chosenStats = req.body.stats
        let username = req.body.username
        // console.log(req.body)
        
      app
          .set("Webapp_Project")
          .collection("CreatedCharacters")
          .find({ username: username, race: chosenRace, name: chosenName, class: chosenClass, job: chosenJob, fact: chosenFact, fact2: chosenFact2, fact3: chosenFact3, stats: chosenStats})
          .toArray(function (err, docs)
          {
            if (docs.length === 0) {
              res.send({'response':"no saved character"});
                } else res.send({docs})})})


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

app.post("/preload",  express.urlencoded({ extended: false }), function (req, res) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
  res.header('Access-Control-Allow-Methods: POST');
  res.header('Access-Control-Allow-Credentials: true')
  let username = req.body.username
  
app
    .set("Webapp_Project")
    .collection("CreatedCharacters")
    .find({ username: username})
    .toArray(function (err, docs)
    {res.send({docs})})})


app.post("/save",  express.urlencoded({ extended: false }), function (req, res) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
  res.header('Access-Control-Allow-Methods: POST');
  res.header('Access-Control-Allow-Credentials: true')
  let savedCharacter = req.body
  let chosenClass = req.body.class
  let chosenRace = req.body.race
  let chosenName = req.body.name
  let chosenJob = req.body.job
  let chosenFact = req.body.fact
  let chosenFact2 = req.body.fact2
  let chosenFact3 = req.body.fact3
  let chosenStats = req.body.stats
  let username = req.body.username
  characterArray = []

    for(let i = 0; i < 9; i++) {
      if (Object.values(req.body)[i] === undefined) { break; }
      
      characterArray.push(Object.values(req.body)[i])
    }
    if (characterArray.length !== 9 ) {
      res.send({'response': 'please complete your character before saving'})
    }else {

  // console.log(req.body)
  app
          .set("Webapp_Project")
          .collection("CreatedCharacters")
          .find({ username: username, race: chosenRace, name: chosenName, class: chosenClass, job: chosenJob, fact: chosenFact, fact2: chosenFact2, fact3: chosenFact3, stats: chosenStats })
          .toArray(function (err, docs)
          { 
            // if the returned docs has a length of 0, it means that an account with that username does not currently exist, so one can be created
            if (docs.length === 0){
          app
          .get("Webapp_Project")
          .collection("CreatedCharacters")
          .insertOne(savedCharacter, function (err, dbResp){
          res.send({'response':'character saved'})
          }
           )
        } else {
          res.send({'response':'character already exists'})
        }
      
      })}})
// }




//Get request for Name Generator
app.get("/name", async (req, res) => {
  
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let name
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

      const namesCollection = db.collection("Names");
      namesCollection.find().toArray(async (err, results) => {
        const nameResult = await namesCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of nameResult) {
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
  let race
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

      const racesCollection = db.collection("Races");
      racesCollection.find().toArray(async (err, results) => {
        const raceResult = await racesCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of raceResult) {
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

      const jobsCollection = db.collection("JobTitles");
      jobsCollection.find().toArray(async (err, results) => {
        const jobResult = await jobsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of jobResult) {
          job = doc.JobTitles;
          res.send({ job: doc.JobTitles });
          Promise.resolve(doc.JobTitles);
        }
      });
    }
  );
});

//Get request for FunFact1 Generator
app.get("/facts", async (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let fact
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
        const factResult = await factsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of factResult) {
          fact = doc.FunFact;
          res.send({ fact: doc.FunFact });
          Promise.resolve(doc.FunFact);
        }
      });
    }
  );
});


//Get request for FunFact2 Generator
app.get("/fact2", async (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let fact2;
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
        const fact2Result = await factsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of fact2Result) {
          fact2 = doc.FunFact;
          res.send({ fact2: doc.FunFact });
          Promise.resolve(doc.FunFact);
        }
      });
    }
  );
});

//Get request for FunFact3 Generator
app.get("/fact3", async (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017";
  let fact3
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
        const fact3Result = await factsCollection.aggregate([
          { $sample: { size: 1 } },
        ]);
        for await (const doc of fact3Result) {
          fact3 = doc.FunFact
          res.send({ fact3: doc.FunFact });
          Promise.resolve(doc.FunFact);
        }
      });
    }
  );
});

//Get Request for Stats
app.get("/stats", async (req, res) => {
  let rolls = [];
  let stats = [];
  for (let i = 0; i < 6; i++){
    rolls = []
// Done six times to get all six stats
  for (let i = 0; i < 4; i++) 
  // Four dice 6 sided dice rolled 
  {
    let diceSix = Math.floor(Math.random() * 6) + 1; // the 6 sided dice is rolled
    rolls.push(diceSix); //each dice roll is added to an array
  }
  let fourOrganisedRolls = []
  fourOrganisedRolls.push(rolls.sort().shift()); // the array is organised from lowest to highest, and then the smallest is removed
  const initialValue = 0; 
  let sumWithInitial = 0;
  sumWithInitial = rolls.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  ); // this  allows us to add all the numbers in the array together creating one full stat
  stats.push(sumWithInitial); // this adds the sum to the stat array
}
res.send(stats)
});

