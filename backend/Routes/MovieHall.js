const { addhall, allHalls, updateHall, deleteHall, getonehall } = require('../Controllers/MovieHall');

const router = require('express').Router();



router.post('/', addhall)
router.get('/list', allHalls)
router.get('/getone/:id', getonehall)
router.put('/update/:id', updateHall)
router.delete('/delete/:id', deleteHall)


module.exports = router;