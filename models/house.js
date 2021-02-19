const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    addres: {
        type: String,
        trim: true
    },
    resume: {
        type: String
    },
    price: {
        type: Number,
        trim: true
    },
    property: {
        type: String,
        trim: true
    },
    interest: {
        type: Number,
        trim: true
    },
    beedrom: {
        type: Number,
        trim: true
    },
    url: {
        type: String,
        trim: true
    },
});

module.exports = mongoose.model("House",houseSchema);