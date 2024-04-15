const mongoose = require('mongoose');

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    volunteers: {
        type: Number,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Event', eventSchema);