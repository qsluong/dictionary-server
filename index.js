const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./configs/environment');

// Set up connection globally (for the whole application)
const mongodb = require('./databases/mongodb');

// API v1
// const vocabularyRoute = require('./api/v1/vocabulary-route');
const vocabularyRoute = require('./api/v1/vocabulary-route-mongodb');

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

app.listen(config.env.port, () => {
    console.log('Server is listening on http://localhost:' + config.env.port);
});

module.exports = app;