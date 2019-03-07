const neo4j = require('neo4j-driver').v1;
const config = require('../configs/environment');

const driver = neo4j.driver(config.envNeo4j.Url, neo4j.auth.basic(config.envNeo4j.User, config.envNeo4j.Password));

module.exports = driver;