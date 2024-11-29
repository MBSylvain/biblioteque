const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB database!");
    return client.db("base");
  } catch (err) {
    console.error("Connection failed", err);
  }
}

module.exports = connectDB;
