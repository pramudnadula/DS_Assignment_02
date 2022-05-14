const { allshows, createShow, specificshows, getoneshow, updateshow, updatecart, analytics } = require('../Controllers/Show');

const router = require('express').Router();



router.post('/', createShow)
router.post("/all", allshows)
router.get("/all/:id", specificshows)
router.get('/getone/:id', getoneshow)
router.put('/update/:id', updateshow)
router.put('/updatecart', updatecart)
router.get('/analytic', analytics)

module.exports = router;