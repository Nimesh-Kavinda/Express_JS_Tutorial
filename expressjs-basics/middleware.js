const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// define middelware function

const myFirstMiddleware = (req, res, next) => {
  console.log('This first middelware on run every request');
  next(); // call next to move to the next middleware or route handler
};

// use middelware function

app.use(myFirstMiddleware);

// root route

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page with Middleware!');
});

// About page

app.get('/about', (req, res) => {
  res.send('Welcome to the About Page with Middleware!');
});
