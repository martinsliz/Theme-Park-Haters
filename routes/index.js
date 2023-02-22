const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/park', controllers.createPark)
router.get('/parks', controllers.getAllParks)
router.get('/parks/:id', controllers.getParkById)
router.post('/post', controllers.createPost)
router.delete('/posts/:id', controllers.deletePost)
router.get('/parks/post', controllers.getPostsForPark)

module.exports = router
