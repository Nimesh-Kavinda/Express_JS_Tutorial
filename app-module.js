const express = require('express');

const app = express();
const port = 3000;

// Application Level Settings
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
    res.send('Hellow Nimesh!');
})

app.post('/api/data', (req, res) => {
    res.json({
        message: 'Data received successfully',
        data: req.body
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})