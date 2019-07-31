const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Marker = new Schema(
    {
			lat: { type: Number },
			lng: { type: Number },
    }
)

module.exports = mongoose.model('markers', Marker)