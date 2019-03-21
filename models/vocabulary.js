const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabularySchema = new Schema({
    name: String,
    definition: String
});

const Vocabulary = mongoose.model('Vocabulary', VocabularySchema);

module.exports = Vocabulary;