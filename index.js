const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// API v1
const vocabularyRoute = require('./api/v1/vocabulary-route');

// Settings
app.use(bodyParser.json());

// CORS Headers, must declare before routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Mount routing
app.use('/vocabulary', vocabularyRoute);

app.get('*', (req, res) => {
    res.status(400).send('Not found');
});

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});