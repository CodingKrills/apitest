const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);