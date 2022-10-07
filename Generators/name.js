//Name Generator

const nameGenerator = async () => {
  try {
    const nameDB = MongoClient.db.collection("Names");

    const nameResult = await nameDB.aggregate([{ $sample: { size: 1 } }]);

    for await (const doc of nameResult) {
      console.log(doc.Names);
    }
  } finally {
    //this ensures that the client will close when you finish / when there's an error
    await MongoClient.close();
  }
};
nameGenerator().catch(console.dir);

// export default nameGenerator;
