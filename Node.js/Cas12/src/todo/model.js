const mongoose = require('mongoose');

// Create a mongoose schema, make title and createdAt as properties and make them required

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
});

const ToDo = mongoose.model('ToDo', todoSchema);


module.exports = ToDo;
