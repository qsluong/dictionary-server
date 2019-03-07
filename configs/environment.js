const env = {
    port : 3000
};

const envNeo4j = {
    Url : 'bolt://localhost',
    User : 'neo4j',
    Password : 'password1'
};

const envMongo = {
    baseUrl : 'mongodb://localhost:27017',
    app : '/dictionary'
};

module.exports = { 
    env,
    envNeo4j,
    envMongo
};