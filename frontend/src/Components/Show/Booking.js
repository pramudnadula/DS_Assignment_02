import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../Assets/Styles/book.css'
import { Tabs, Radio, Space } from 'antd';
const { TabPane } = Tabs;

function Booking(props) {

    const [show, setshow] = useState()
    const [row, setrow] = useState()
    const [col, setcol] = useState()
    const [data, setdata] = useState(0)
    const [seats, setseats] = useState([])
    const [total, settotal] = useState(0)
    const [mov, setmov] = useState()

    const [savedata, setsavedata] = useState([])
    var cartitems = JSON.parse(localStorage.getItem("cart")) || []

    let divide = []
    let selectedseats = []
    useEffect(() => {
        axios.get(`http://localhost:8070/show/getone/${props.match.params.id}`).then((data) => {
            setshow(data.data)
            setrow(data.data.hid.rows)
            setcol(data.data.hid.cols)
            setseats(data.data.hid.seats)
            setmov(data.data.mid)
            selectedseats = data.data.seatbook
            setsavedata(selectedseats)



        }).catch((err) => {
            console.log(err)
        })
    }, [])


    const dividefunc = () => {
        var dis = []
        for (var i = 0; i < seats.length; i++) {

            dis.push(seats[i])
            if ((i + 1) % col === 0) {
                divide.push(dis)
                dis = []
            }
        }

    }

    dividefunc()






    const clickfunc = (id) => {
        const ch = document.getElementById("ch")
        const tota = document.getElementById("total")
        var ds = document.getElementById(id)
        if (ds.classList.contains("ocupied")) {
            return
        }
        if (ds.classList.contains("selected")) {
            ds.classList.remove("selected")
            ds.innerHTML = ""
        } else {
            ds.classList.add("selected")
            ds.innerHTML = id
        }
        if (selectedseats.includes(id)) {
            selectedseats = selectedseats.filter(item => item !== id)
            ch.innerHTML = selectedseats
            tota.innerHTML = (selectedseats.length * show.price)
        } else {

            selectedseats.push(id)
            ch.innerHTML = selectedseats
            tota.innerHTML = (selectedseats.length * show.price)

        }

        console.log(selectedseats)
    }


    const booktickets = () => {
        // const upshow = {
        //     seatbook: [...savedata, ...selectedseats]
        // }
        // axios.put(`http://localhost:8070/show/update/${props.match.params.id}`, upshow).then((data) => {
        //     alert("booked")
        // }).catch((err) => {
        //     console.log(err)
        // })

        const cartitem = {
            sid: props.match.params.id,
            tickets: selectedseats.length,
            show: show,
            total: (selectedseats.length * show.price),
            mov: mov,

        }
        cartitems.push(cartitem)
        localStorage.setItem("cart", JSON.stringify(cartitems))
    }
    let selected = false;
    const findselected = (id) => {
        if (savedata.includes(id)) {
            document.getElementById(id).classList.add("ocupied")
        }
        else {

        }
    }

    return (
        <div className='bok container-fluid'>
            <div className='row justify-content-center'>

                <div className='col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 '>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-10 col-12'>
                            <ul className='showcase'>
                                <li>
                                    <div className='seat'></div>
                                    <small>NA</small>
                                </li>

                                <li>
                                    <div className='seat selected'></div>
                                    <small>selected</small>
                                </li>

                                <li>
                                    <div className='seat ocupied'></div>
                                    <small>ocupied</small>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className=' con'>
                        <div className='screen'></div>
                        <div className='row justify-content-center'>
                            <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>

                                <table>
                                    {divide.map((s, i) => (

                                        <tr>
                                            {s.map(d => (
                                                <>

                                                    <td> <div onClick={(e) => { clickfunc(d) }} id={d} className="seat" ></div></td>
                                                    {findselected(d)}
                                                </>
                                            ))}

                                        </tr>




                                    ))}
                                </table>



                            </div>
                        </div>



                    </div>
                </div>
                <div className='col-4 mt-5'>
                    <h4>Ticket Price : {show?.price}</h4>
                    <h4>Booked seats :<p id='ch'></p></h4>
                    <h4>Total price : <p id='total'></p></h4>
                    <button onClick={(e) => { booktickets() }} className='btn btn-warning'>Add to cart</button>
                </div>
            </div>
        </div >
    );
}

export default Booking;