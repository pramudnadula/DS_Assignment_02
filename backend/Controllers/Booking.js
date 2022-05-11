const Booking = require('../Models/Booking')

exports.createBooking = (req, res) => {
    const booking = new Booking(req.body)
    booking.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "booking allready Exists"
            })
        }
        else {
            res.json({ data })
        }
    })
}