const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')
const Schema = mongoose.Schema

const Park = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: String, required: true },
    open: { type: boolean, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Park', Park)
