const mongoose = require('mongoose')

const userSchema = {
  name: {
    type: String,
    required: true
  },
  roomAsignment: {
    type: String,
    required: true,
    default: 'exampleTestRoom'
  },
  roles: {
    type: [String],
    required: true,
    default: ['guest']
  }
}

module.exports = mongoose.model('User', userSchema)
