import express from 'express';

const app = express();

app.use(express.json());

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
    {
    id : 4,
    username : "Alice",
    displayName : "Alice Wonderland"
    },
    {
    id : 5,
    username : "Jhon",
    displayName : "Jhon Doe"
    },
    {
    id : 6,
    username : "Harry",
    displayName : "Harry Potter"
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
    console.log(request.query);
    const {
        query : {filter, value}
    }  = request;

    if(!filter && !value) return response.send(mockUsers);

    if(filter && value) return response.send(
        mockUsers.filter((user) => user[filter].includes(value))
    );
     

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


app.post('/api/users', (request, response) => {
    console.log(request.body);
    const { body } = request;
    const newUsers = {id :mockUsers[ mockUsers.length - 1].id + 1, ...body };
    mockUsers.push(newUsers);
    return response.status(201).send(newUsers);
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

// PUT request

app.put('/api/users/:userId', (request, response) => {
    const {
        body,
        params : {userId},
    } = request;

    const parseId = parseInt(userId);
    if(isNaN(parseId)) return response.sendStatus(400);

    const findUserIndex = mockUsers.findIndex((user) => user.id === parseId );

    if(findUserIndex === -1) return response.sendStatus(404);

    mockUsers[findUserIndex] = {id : parseId, ...body};
    return response.sendStatus(200);


});


// Patch request

app.patch('/api/users/:id', (request, response) => {
    const {
        body,
        params : {id},
    } = request;
    const parseId = parseInt(id);
    if(isNaN(parseId)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parseId );

    if(findUserIndex === -1) return response.sendStatus(404);

    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body};
    return response.send(mockUsers[findUserIndex]);
});




// localhost:3000

