const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
    name: String,
    vocabularies: 
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vocabulary'
        }
    ]
});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;