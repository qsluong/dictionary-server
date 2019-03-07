const express = require('express');
const router = express.Router();
const neo4j = require('../../databases/neo4j');
const session = neo4j.session();
let response = [];

router.get('', (req, res) => {
    session.readTransaction(tx => tx.run(
        'MATCH (n) RETURN n'
    )).then(result => {
        session.close();
        result.records.forEach(record => {
            response.push(record.get(0));
        });
        res.send(response);
    })
});

router.post('', (req, res) => {
    session.writeTransaction(tx => tx.run(
        'CREATE (v:Vocabulary {' +
        'name: $name}) RETURN v', {'name': req.body.name}
    )).then(result => {
        session.close();
        result.records.forEach(record => {
            response.push(record.get(0));
        });
        res.send(response);
    });
});

router.put('', (req, res) => {
    res.send(req.method + ': ' + req.baseUrl);
});

router.delete('', (req, res) => {
    res.send(req.method + ': ' + req.baseUrl);
});

module.exports = router;