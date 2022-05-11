const mongoose = require('mongoose')
var ObjectId = require('bson').ObjectId;
const BookingSchema = new mongoose.Schema({
    uid: {
        type: ObjectId

    },
    sid: {
        type: ObjectId,
        ref: "show"
    },
    tickets: {
        type: Number
    },
    price: {
        type: Number
    },
    total: {
        type: Number
    }


}, { timestamps: true })

const Booking = mongoose.model("booking", BookingSchema);
module.exports = Booking;