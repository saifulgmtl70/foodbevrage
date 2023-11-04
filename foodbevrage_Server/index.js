
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port= process.env.PORT || 5000



// Middle Ware 
app.use(cors(
  {
    origin: ["https://food-client-nine.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mycluster.qdkgfjd.mongodb.net/`;

// var uri = `mongodb://${process.env.db_user}:${process.env.db_pass}@mycluster.qdkgfjd.mongodb.net:27017,ac-m4lxtfu-shard-00-01.dd65dah.mongodb.net:27017,ac-m4lxtfu-shard-00-02.dd65dah.mongodb.net:27017/?ssl=true&replicaSet=atlas-8kx53l-shard-0&authSource=admin&retryWrites=true&w=majority`;

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


    const userCollection = client.db('foodbevarageDB').collection('user');
    const brandsCollection = client.db('foodbevarageDB').collection('products');
    const cartCollection = client.db('foodbevarageDB').collection('cart');



    // Cart Related 
   // Update the /cart endpoint in your index.js file

    app.post('/cart', async (req, res) => {
      const newCartItem = req.body;
      const result = await cartCollection.insertOne(newCartItem);
      res.send(result);
    });


    // Get all items in the cart
    app.get('/cart', async (req, res) => {
      const cursor = cartCollection.find();
      const cartItems = await cursor.toArray();
      res.send(cartItems);
    });



    app.delete('/cart/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await cartCollection.deleteOne(query);
      res.send(result);
  })





    app.get('/products', async(req, res) =>{
      const cursor = brandsCollection.find();
      const result =  await cursor.toArray();
      res.send(result);
    });


    app.get('/products/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await brandsCollection.findOne(query)
      res.send(result)
  })


    app.put('/products/:id', async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) }
        const options = { upsert: true };
        const updateProducts = req.body;

        const product = {
            $set: {
                name: updateProducts.name,
                brandname: updateProducts.brandname,
                product_type: updateProducts.product_type,
                photo: updateProducts.photo,
                price: updateProducts.price,
                description: updateProducts.description,
            }
        }

        const result = await brandsCollection.updateOne(filter, product, options);
        res.send(result);

    })
 



    app.post('/products', async(req, res) =>{
      const newProducts = req.body;
      console.log("NewProducts", newProducts);
      const result = await brandsCollection.insertOne(newProducts);
      res.send(result);
    })








    // Users Related API

    app.get('/user', async(req, res) =>{
      const cursor = userCollection.find();
      const users = await cursor.toArray()
      res.send(users)
  })




  app.post('/user', async(req, res) =>{
    const user = req.body;
    const result = await userCollection.insertOne(user);
    res.send(result);

    // Extract the inserted document's _id
    const insertedId = result.insertedId;

    // Update the user document with the photo URL
    await userCollection.updateOne(
        { _id: insertedId },
        { $set: { photo: user.photo } }
    );
    // console.log(user);
  });


  app.delete('/user/:id', async(req, res) =>{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await userCollection.deleteOne(query);
    res.send(result);
})








    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) =>{
    res.send("Food and Bevarage is running.yehhhh.....................");
})


app.listen(port, () =>{
    console.log(`Food and Bevrage is runnning on port : ${port}`);
})
