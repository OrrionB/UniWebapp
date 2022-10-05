//Name Generator

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

export default nameGenerator();
