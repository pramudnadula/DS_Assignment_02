const { allshows, createShow, specificshows, getoneshow, updateshow } = require('../Controllers/Show');

const router = require('express').Router();



router.post('/', createShow)
router.post("/all", allshows)
router.get("/all/:id", specificshows)
router.get('/getone/:id', getoneshow)
router.put('/update/:id', updateshow)

module.exports = router;