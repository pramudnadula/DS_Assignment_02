const { allshows, createShow, specificshows, getoneshow, updateshow, updatecart, analytics, deleteshow, updateoneshow } = require('../Controllers/Show');

const router = require('express').Router();



router.post('/', createShow)
router.get("/all", allshows)
router.get("/all/:id", specificshows)
router.get('/getone/:id', getoneshow)
router.put('/update/:id', updateshow)
router.put('/updateone/:id', updateoneshow)
router.delete('/delete/:id', deleteshow)
router.put('/updatecart', updatecart)
router.get('/analytic', analytics)

module.exports = router;