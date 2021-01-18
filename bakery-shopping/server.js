const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

//To render the page staticaly when deployed
app.use('/', express.static(__dirname + '/build'));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/bakery-shopping-db',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

//This will create the model for the enpoints
const Product = mongoose.model(
  'products',
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    image: String,
    description: String,
    price: Number,
    availableSizes: [String],
  })
);

//To get all products in database
app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
//To add new products
app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});
//To update a product
app.put('/api/products/:id', (req, res) => {
  const productProps = req.body;
  Product.findByIdAndUpdate({ _id: req.params.id }, productProps)
    .then(() => {
      Product.findById({ _id: req.params.id });
      console.log(req.body);
    })
    .then((product) => {
      res.send(productProps);
    })
    .catch((err) => console.log({ message: err.message }));
});
//To delete a product
app.delete('/api/products/:id', async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

// Order model
const Order = mongoose.model(
  'order',
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      email: String,
      name: String,
      address: String,
      total: Number,
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    { timestamps: true }
  )
);
//New Order
app.post('/api/orders', async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: 'Data is required.' });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

//Get all orders
app.get('/api/orders', async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});

//Delete order
app.delete('/api/orders/:id', async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.send(order);
});

//Gallery model
const Gallery = mongoose.model(
  'gallery',
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      title: String,
      image: String,
      description: String,
      isCake: Boolean,
      isCookie: Boolean,
    },
    { timestamps: true }
  )
);

//To get all Gallery items in database
app.get('/api/gallery', async (req, res) => {
  const products = await Gallery.find({});
  res.send(products);
});
//To add a new item to gallery
app.post('/api/gallery', async (req, res) => {
  const newProduct = new Gallery(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});
//To update a gallery item
app.put('/api/gallery/:id', (req, res) => {
  const productProps = req.body;
  Gallery.findByIdAndUpdate({ _id: req.params.id }, productProps)
    .then(() => {
      Gallery.findById({ _id: req.params.id });
    })
    .then((product) => {
      res.send(productProps);
    })
    .catch((err) => console.log({ message: err.message }));
});
//To delete an item from gallery
app.delete('/api/gallery/:id', async (req, res) => {
  const deleteProduct = await Gallery.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server at http://localhost:5000'));
