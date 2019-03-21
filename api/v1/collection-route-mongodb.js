const express = require('express');
const router = express.Router();
const Collection = require('../../models/collection');

router.get('', (req, res) => {
    Collection.findOne().populate('vocabularies')
        .then(col => res.send(col))
        .catch(error => res.send(error));
});

router.post('', (req, res) => {
    let col = new Collection(req.body);
    col.save()
        .then(collection => res.send(collection))
        .catch(error => res.send(error));
});

router.post('/:id', (req, res) => {
    let colId = req.params.id;
    let vocabList = req.body;
    let vocabIds = [];

    for (let i = 0; i < vocabList.length; i++) {
        vocabIds.push(vocabList[i]._id);
    }

    Collection.findByIdAndUpdate({ _id: colId }, { vocabularies : vocabIds })
        .then(col => res.send(col))
        .catch(error => res.send(error));
});

router.put('/:id', (req, res) => {
    let colId = req.params.id;

    Collection.findByIdAndUpdate({ _id: colId }, req.body)
        .then(col => res.send(col))
        .catch(error => res.send(error));
});

router.delete('/:id', (req, res) => {
    let colId = req.params.id;
    
    Collection.findByIdAndDelete({ _id: colId })
        .then(col => res.send(col))
        .catch(error => res.send(error));
});

module.exports = router;