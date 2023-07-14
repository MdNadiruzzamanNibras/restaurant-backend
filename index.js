const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://rerestaurant:SLpIz7jAX7ahv1Z0@cluster0.bhn4mko.mongodb.net/?retryWrites=true&w=majority";

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
   client.connect();
    // Send a ping to confirm a successful connection
    const dishCollection = client.db('restaurant').collection('dish');

    
    app.get('/dishs', async(req,res)=>{
      const qurey = {}
      const cursor =  dishCollection.find(qurey)
      const dishs = await cursor.toArray()
      res.send(dishs)
    })

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

