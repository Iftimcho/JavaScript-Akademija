const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ime: {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    specijalizacija: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Doctor', doctorsSchema);