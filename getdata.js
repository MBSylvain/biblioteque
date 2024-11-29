const connectDB = require("./database");

async function getData(collectionName, query) {
  const db = await connectDB();
  const collection = db.collection(collectionName);
  try {
    const data = await collection.find(query).toArray();
    console.log("Data retrieved:", data);
    return data;
  } catch (err) {
    console.error("Retrieve failed", err);
  }
}

module.exports = getData;
