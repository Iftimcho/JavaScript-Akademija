const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  manufacturer: {
    type: String,
    required: ['Manufacturer is a required field']
  },
  model: {
    type: String,
    required: ['Model is a required field']
  },
  year: {
    type: Number,
    required: ['Year is a required field']
  },
  serial_number: {
    type: String,
    required: ['Serial Number is a required field'],
    unique: true,
    validate: {
      // does not work yet
      validator: function(v) {
        return /[A-Z]{3}-{1}[0-9]{10}/
      },
      // validator: v => /[A-Z]{3}-[0-9]{10}/,
      message: props => `${props.value} is not a valid ID number!`
    }
  }
});

module.exports = mongoose.model('Car', carSchema);