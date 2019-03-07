const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabularySchema = new Schema({
    name: String
});

const Vocabulary = mongoose.model('vocabulary', VocabularySchema);

module.exports = Vocabulary;