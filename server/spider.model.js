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
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    
    }
});

module.exports = mongoose.model('Spider', Spider);