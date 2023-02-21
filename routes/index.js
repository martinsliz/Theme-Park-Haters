const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/parks', controllers.createPark)
router.get('/parks', controllers.getAllParks)
router.get('/parks/:id', controllers.getParkById)

module.exports = router
