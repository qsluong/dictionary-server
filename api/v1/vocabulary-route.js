let express = require('express');
let router = express.Router();

router.get('', (req, res) => {
    res.send(req.method + ': ' + req.baseUrl);
});

router.post('', (req, res) => {
    res.send(req.method + ': ' + req.baseUrl);
});

router.put('', (req, res) => {
    res.send(req.method + ': ' + req.baseUrl);
});

router.delete('', (req, res) => {
    res.send(req.method + ': ' + req.baseUrl);
});

module.exports = router;