const { createBooking, getbookings, delbookings, getallbookings } = require('../Controllers/Booking');

const router = require('express').Router();



router.post('/', createBooking)
router.get('/getbookings/:id', getbookings)
router.delete('/:id', delbookings)
router.get('/all', getallbookings)

module.exports = router;