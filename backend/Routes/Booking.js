const { createBooking } = require('../Controllers/Booking');

const router = require('express').Router();



router.post('/', createBooking)

module.exports = router;