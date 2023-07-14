const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 5000




const uri = "mongodb+srv://rerestaurant:SLpIz7jAX7ahv1Z0@cluster0.bhn4mko.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const dishCollection = client.db('restaurant').collection('dish');
    console.log(" You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

