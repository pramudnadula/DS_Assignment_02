const Booking = require('../Models/Booking')
const Show = require('../Models/Show')
exports.createBooking = (req, res) => {
    const { cart, uid } = req.body
    for (var i = 0; i < cart.length; i++) {
        var book = new Booking();
        book.uid = uid;
        book.sid = cart[i].sid
        book.tickets = cart[i].tickets
        book.price = cart[i].show.price
        book.mid = cart[i].mov._id
        book.seats = cart[i].seatbook


        book.save((err, data) => {
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

}

exports.getbookings = (req, res) => {
    let mid = req.params.id;
    const book = Booking.find({ uid: mid }).populate("sid").populate("mid").then((sh) => {
        res.json(sh);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "error in fetching", error: err.message });
    })

}

exports.delbookings = async (req, res) => {
    let mid = req.params.id;
    const booking = await Booking.findById(mid);

    const show = await Show.findById(booking.sid)
    var arr = show.seatbook
    for (var i = 0; i < booking.seats.length; i++) {
        arr = arr.filter(item => item !== booking.seats[i])

    }
    show.seatbook = arr;
    console.log(arr)
    show.save()

    const bo = await Booking.findByIdAndDelete(mid)


}