const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: ['Name field is required']
    },
    email: {
        type: String,
        required: ['Email field is required']
    },
    password: {
        type: String,
        required: ['Password field is required']
    }
});

module.exports = mongoose.model('User', UserSchema);