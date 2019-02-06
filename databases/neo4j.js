const neo4j = require('neo4j-driver').v1;
const config = require('../configs/environment');

const driver = neo4j.driver(config.Url, neo4j.auth.basic(config.User, config.Password));

module.exports = driver;