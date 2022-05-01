const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', Event);