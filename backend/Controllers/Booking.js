const Booking = require('../Models/Booking')
const Show = require('../Models/Show')
var client = require('twilio')(
    "AC594b9043f05817d53c1564e7e09f6405",
    "c2f6e6e420f3689f239399a7fc200080"
);

var nodemailer = require('nodemailer');
const User = require('../Models/User');
exports.createBooking = async (req, res) => {
    const { cart, uid } = req.body
    const user = await User.findById({ _id: uid })
    sendmail(cart, user.email);
    sendmsg()
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

exports.getallbookings = async (req, res) => {
    try {

        const books = await Booking.find().populate("mid").populate("uid")
        res.json(books)

    } catch (error) {
        res.status(400).json({
            error: String(err)

        })
    }
}

const sendmsg = () => {

}

const sendmail = (cart, email) => {
    var items = []
    for (var i = 0; i < cart.length; i++) {
        let item = {
            mname: cart[0].mov.name,
            mimage: cart[0].mov.image,
            seats: cart[0].seatbook,
            hall: cart[0].show.hid.name,
            date: cart[0].show.date,
            time: cart[0].show.time,
            price: cart[0].show.price

        }
        items.push(item)
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'moviemastersrilanka@gmail.com',
            pass: 'movie22@'
        }
    });

    var mailOptions = {
        from: 'moviemastersrilanka@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// const html = <table><tr><td>Movie Name</td><td>Seats</td><td>Hall</td><td>Date</td><td>Time</td><td>price</td></tr></table>
