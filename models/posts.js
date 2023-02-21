const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    park: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true },
    name: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', Post)
