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
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    }, 
    lat:{
        type: Number
    }, 
    lng:{
        type: Number
    }, 
    poster:{
        type: String
    }, 
});

module.exports = mongoose.model('Event', Event);