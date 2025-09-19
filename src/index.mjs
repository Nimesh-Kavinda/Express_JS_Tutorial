import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (request, response) => {
    response.set('Cache-Control', 'no-store');
 response.status(201).send({msg : "Hello I am from object"});
});

app.get('/api/users', (request, response) => {
   response.send([
    {
    id : 1,
    username : "Nimesh",
    displayName : "Nimesh Karunasinghe"
    },
    {
    id : 2,
    username : "Kavinda",
    displayName : "Kavinda Perera"
    },
    {
    id : 3,
    username : "Karunasinghe",
    displayName : "Karunasinghe KNK"
    },
]);
});

app.get('/api/products', (request, response) => {
    response.send([
        {
            id : 123,
            name : "iPhone 14 Pro Max",
            price : 250000
        },
        {
            id : 124,
            name : "iPhone 15 Pro Max",
            price : 750000
        },
        {
            id : 126,
            name : "iPhone 74 Pro Max",
            price : 2500000
        },
    ])
});

// localhost:3000

