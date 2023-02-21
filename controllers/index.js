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
    const parks = await Plant.find()
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getParkById = async (req, res) => {
  try {
    const { id } = req.params
    const park = await Plant.findById(id)
    if (park) {
      return res.status(200).json({ park })
    }
    return res.status(404).send('This park does not exist in our database')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createPark,
  getAllParks,
  getParkById
}
