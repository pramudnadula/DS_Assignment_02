import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import QRCode from 'qrcode';
import '../../Assets/Styles/mybook.css'
function Mybookings(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [items, setitems] = useState([])
    const [check, setcheck] = useState(false)
    var user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        axios.get(`http://localhost:8070/booking/getbookings/${user._id}`).then((data) => {
            setitems(data.data)


        }).catch((err) => {
            console.log(err)
        })
    }, [items])


    const generateQrCode = async (book) => {
        try {
            //create object and passing into data

            const ob = {
                name: book.mid.name,
                image: book.mid.image,
                seats: book.seats,
                date: book.sid.date,
                time: book.sid.time,
                price: book.sid.price,

            }
            const response = await QRCode.toDataURL(JSON.stringify(ob));
            //set image url in to setImageUrl
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    }

    const checkavilable = (dat) => {
        var d1 = moment(dat, "YYYY MM DD")
        var current = moment().startOf('day');
        var dif = moment.duration(current.diff(d1)).asDays()

        if (dif > 1) {
            return false
        } else {
            return true
        }
    }

    const delbooking = (id) => {
        axios.delete(`http://localhost:8070/booking/${id}`).then((dat) => {

        }).catch((er) => {
            console.log(er)
        })
    }
    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h2 className='text-center'>My Bookings</h2>
                </div>
                <div className='col-8'>
                    <div className="table-responsive">
                        <table className="table table-borderless table-shopping-cart">
                            <thead className="text-muted">
                                <tr className="small text-uppercase">
                                    <th scope="col">Movie</th>
                                    <th scope='col'>Book On</th>
                                    <th scope="col">Show Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col" >#Tickets</th>
                                    <th scope="col" >Price</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {items?.map((m, i) => (

                                    <tr className='table_row'>

                                        <td>
                                            <figure className="itemside align-items-center">
                                                <div className="aside"><img src={"http://localhost:8070/" + m.mid?.image} className="img-sm" /></div>
                                                <figcaption className="info">
                                                    <h3 className='txt'>{m.mid.name}</h3>
                                                    <p className="text-muted small txt2"><br /></p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>{moment(m.createdAt).format("YYYY-MM-DD")}</td>
                                        <td>{m.sid.date}</td>
                                        <td>{m.sid.time}</td>
                                        <td>{m.tickets} </td>
                                        <td>
                                            <div className="price-wrap"> <var className="price">${m.sid.price * m.tickets}</var> <small className="text-muted"> ${m.sid.price} </small> </div>
                                        </td>

                                        <td className="text-right d-md-block">   {checkavilable(m.createdAt) ? <a href className="btn btn-light" data-abc="true" onClick={(e) => { delbooking(m._id) }} ><i className="fa fa-trash" /></a> : <></>} </td>
                                        <td><a onClick={(e) => { generateQrCode(m) }} className="btn btn-light"><i class="fa fa-qrcode" aria-hidden="true"></i></a></td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>

                </div>
                <div className='col-3'>
                    <div className='row justify-content-center'>
                        <div className='col-10 qr p-3'>
                            <h3 className='text-center'>QR Code </h3>
                            {imageUrl ? (<a href={imageUrl} download> <img src={imageUrl} alt="img" /><br /><h4 className='text-center'>Click to Download</h4></a>) : null}
                        </div>
                    </div>

                </div>
            </div>



        </>

    );
}

export default Mybookings;