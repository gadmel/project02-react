const mongoose = require('mongoose')

const userSchema = {
  name: {
    type: String,
    required: true,
  },
  roomAsignment: {
    type: String,
    required: true,
    default: 'RehearsalRoom_1',
  },
  roles: {
    type: [String],
    required: true,
    default: ['guest'],
  },
}

module.exports = mongoose.model('User', userSchema)
