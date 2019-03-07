var mongoose = require('mongoose');
var config = require('../configs/environment');

var mongoDB = config.envMongo.baseUrl + config.envMongo.app;
mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.once('open', () => console.log('Connection established with MongoDB on: ' + mongoDB));
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db;
