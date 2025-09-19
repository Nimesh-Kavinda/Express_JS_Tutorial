const express = require('express');
const app = express();
const port = 300;

app.get('/', (req, res) => {
    res.send('Welcome to Our Home Page!');
})

// get all products

app.get('/products', (req, res) => {

    const products = [
    { id: 1, label: 'Product A' },
    { id: 2, label: 'Product B'},
    { id: 3, label: 'Product C'},
];
    res.json(products);
});

//get a single Product

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const products = [
    { id: 1, label: 'Product A' },
    { id: 2, label: 'Product B'},
    { id: 3, label: 'Product C'},
   ];

   const getSingleProduct = products.find(product => product.id === productId);

   if(getSingleProduct){
    res.json(getSingleProduct);
   } else {
    res.status(404).json({message: 'Product Not Found'});
   }
   
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})