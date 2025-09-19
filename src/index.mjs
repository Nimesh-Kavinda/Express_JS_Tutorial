import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const mockUsers = [
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
]

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (request, response) => {
    response.set('Cache-Control', 'no-store');
 response.status(201).send({msg : "Hello I am from object"});
});

app.get('/api/users', (request, response) => {
   response.send(mockUsers);
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

app.get('/api/users/:userId', (request, response) => {
    console.log(request.params);
    const userID = parseInt(request.params.userId);
    console.log(userID);
    if(isNaN(userID)){
        return response.status(400).send({msg : "bad request. Invalid ID"});
    };

    const findUser = mockUsers.find((user) => user.id === userID);
    if(!findUser){
        return response.sendStatus(404);
    }
    response.send(findUser);
});
// localhost:3000

