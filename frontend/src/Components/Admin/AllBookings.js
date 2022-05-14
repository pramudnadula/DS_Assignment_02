import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllBookings(props) {
    const [bookings, setbookings] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8070/booking/all').then((data) => {
            setbookings(data.data)

        }).catch((err) => {

        })
    }, [])
    return (
        <div>
            <table>
                <tr>
                    <th>user name</th>
                    <th>Movie name</th>
                    <th>#Tickets</th>
                    <th>Ticket Price</th>
                    <th>Total</th>
                </tr>

                {bookings?.map((bo, i) => (
                    <tr>
                        <td>{bo.uid.name}</td>
                        <td>{bo.mid.name}</td>
                        <td>{bo.tickets}</td>
                        <td>{bo.price}</td>
                        <td>{(bo.tickets * bo.price)}</td>
                    </tr>
                ))}
            </table>

        </div>
    );
}

export default AllBookings;