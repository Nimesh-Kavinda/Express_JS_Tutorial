const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// root route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// get all products

app.get('/products', (req, res) => {
  const products = [
    { id: 1, label: 'Laptop', price: 999 },
    { id: 2, label: 'Smartphone', price: 699 },
    { id: 3, label: 'Tablet', price: 499 },
  ];
  res.json(products);
});

// get a singel product by id

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    { id: 1, label: 'Laptop', price: 999 },
    { id: 2, label: 'Smartphone', price: 699 },
    { id: 3, label: 'Tablet', price: 499 },
  ];

  const getSingelProduct = products.find((product) => product.id === productId);
  if (getSingelProduct) {
    res.json(getSingelProduct);
  } else {
    res.status(404).send('Product not found please try with diffent id');
  }
});
