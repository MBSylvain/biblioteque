const connectDB = require("./database");

async function insertData(collectionName, data) {
  const db = await connectDB();
  const collection = db.collection(collectionName);
  try {
    const result = await collection.insertOne(data);
    console.log("Data inserted:", result.insertedId);
  } catch (err) {
    console.error("Insert failed", err);
  }
}

module.exports = insertData;
