const express = require('express');
const app = express();

const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimestampLogger);

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page with Timestamp Logger!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
