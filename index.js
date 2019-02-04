const express = require('express');
const app = express();

// API v1
const vocabularyRoute = require('./api/v1/vocabulary-route');

app.use('/vocabulary', vocabularyRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.status(400).send('Not found');
});

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});