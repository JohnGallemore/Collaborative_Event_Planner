const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://AdminUser:administration@maincluster.1bujy.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
}
});

async function insert(userInfo) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    await client.db("EventPlannerDatabase").collection("users").insertOne(userInfo)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}