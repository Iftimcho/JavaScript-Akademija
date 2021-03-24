const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
    // id nema potreba da se pisuva, mongo ke si kreira avtomatski pri create na nov resource
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ime: {
        type: String,
        required: ['Ime is required']
    },
    prezime: {
        type: String,
        required: ['Prezime is required']
    },
    dob: {
        type: Date,
        required: ['Date of birth is required']
    },
    specijalizacija: {
        type: String,
        required: ['Specijalizacija is required']
    }
});

module.exports = mongoose.model('Doctor', doctorsSchema);