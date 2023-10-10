import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    ]
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, {
  timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export { User }
