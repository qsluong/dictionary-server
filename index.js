const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./configs/environment');

// Set up connection globally (for the whole application)
const mongodb = require('./databases/mongodb');

// API v1

// Neo4j
// const vocabularyRoute = require('./api/v1/vocabulary-route');

// MongoDB
const vocabularyRoute = require('./api/v1/vocabulary-route-mongodb');
const collectionRoute = require('./api/v1/collection-route-mongodb');

// Settings
app.use(bodyParser.json());

// CORS Headers, must declare before routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // CASE SENSITIVE!!!!!
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Mount routing
app.use('/vocabulary', vocabularyRoute);
app.use('/collection', collectionRoute);

app.get('*', (req, res) => {
    res.status(400).send('Not found');
});

app.listen(config.env.port, () => {
    console.log('Server is listening on http://localhost:' + config.env.port);
});

module.exports = app;