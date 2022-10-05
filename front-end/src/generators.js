//Name Generator
// const client = new MongoClient();
// const db = "mongodb://localhost:27017";
// const { MongoClient } = require("mongodb");
// const Db = "mongodb://localhost:27017";

// let mongo = require("mongodb")
// let DB = "mongodb://localhost:27017";
// mongo.MongoClient.connect(DB, function(err, db) {
//   if (err) throw (err);
//   console.log("databse created");
//   db.close
// },

async function nameGenerator() {
  try {
    const database = client.db("Webapp_Project");
    const nameDB = database.collection("Names");
    const column = "Names";

    const nameResult = await nameDB.aggregate([{ $sample: { size: 1 } }]);

    // [];

    for await (const doc of nameResult) {
      console.log(doc.Names);
    }

    //make a list variable then give that a name & then when we run the function we
    //can call the function and it will reuse the result in the reactJS - USE EXPORT
  } finally {
    //this ensures that the client will close when you finish / when there's an error
    await client.close();
  }
}
nameGenerator().catch(console.dir);

export default nameGenerator;
