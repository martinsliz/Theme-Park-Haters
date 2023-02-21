const Park = require('../models/parks')

const createPark = async (req, res) => {
  try {
    const park = await new Park(req.body)
    await park.save()
    return res.status(201).json({
      park
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find()
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getParkById = async (req, res) => {
  try {
    const { id } = req.params
    const park = await Park.findById(id)
    if (park) {
      return res.status(200).json({ park })
    }
    return res.status(404).send('This park does not exist in our database')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePark = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Park.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Park deleted')
    }
    throw new Error('Park not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Park.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostsForPark = async (req, res) => {
  try {
    const posts = await Post.find({ park: req.params.id })
    return res.status(200).send(posts)
  } catch (e) {
    return res.status(500).send({ error: e.message })
  }
}

module.exports = {
  createPark,
  getAllParks,
  getParkById,
  deletePark,
  getPostsForPark,
  createPost,
  deletePost
}
