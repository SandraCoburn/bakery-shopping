const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/bakery-shopping-db', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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

//To delete a product
app.delete('/app/products/:id', async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server at http://localhost:5000'));
