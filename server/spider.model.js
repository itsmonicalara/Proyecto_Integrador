const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Spider = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    danger: {
        type: Boolean,
        required: true
    },
    url: {
        type: String
    },
    info: { 
        species: {
            type: String
        },
        family: {
            type: String
        },
        filo: {
            type: String
        },
        scientificName: {
            type: String
        },
    }
});

module.exports = mongoose.model('Spider', Spider);