const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: { type: String },
  email: String,
  username: String,
})

module.exports = mongoose.model('User', userSchema)
