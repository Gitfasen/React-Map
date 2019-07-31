const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
			firstName: { type: String },
			lastName: { type: String },
			username: { type: String, required: true },
			password: { type: String, required: true }
    }
)

module.exports = mongoose.model('users', User)