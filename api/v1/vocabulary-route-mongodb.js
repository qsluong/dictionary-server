const express = require('express');
const router = express.Router();
const Vocabulary = require('../../models/vocabulary');

const mongoose = require('mongoose');

router.get('', (req, res) => {
    Vocabulary.findOne()
        .then(vocab => res.send(vocab))
        .catch(error => res.send(error));
});

router.post('', (req, res) => {
    var vocab = new Vocabulary(req.body);
    vocab.save()
        .then(result => res.send(result));
});

router.put('/:id', (req, res) => {
    var vocabId = req.params.id;
    Vocabulary.updateOne({ _id: vocabId }, req.body)
        .then(update => res.send(update))
        .catch(error => res.send(error));
});

router.delete('/:id', (req, res) => {
    var vocabId = req.params.id;
    Vocabulary.deleteOne({ _id: vocabId })
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

module.exports = router;