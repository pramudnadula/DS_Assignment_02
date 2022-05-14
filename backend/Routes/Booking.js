const { createBooking, getbookings, delbookings } = require('../Controllers/Booking');

const router = require('express').Router();



router.post('/', createBooking)
router.get('/getbookings/:id', getbookings)
router.delete('/:id', delbookings)

module.exports = router;