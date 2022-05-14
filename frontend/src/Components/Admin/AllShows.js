import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllShows(props) {

    const [shows, setshows] = useState([])

    const gettime = (id) => {
        if (id === 1) {
            return "10.00am - 1.00pm"
        }
        else if (id === 2) {
            return "1.00pm - 4.00pm"
        }
        else {
            return "4.00pm - 7.00pm"
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8070/show/all').then((data) => {
            setshows(data.data)
        }).catch((err) => {

        })
    }, [shows])

    const deleteconfirm = (id) => {

        const confirmBox = window.confirm(
            "All The bookings related to that show will be Deleted"
        )
        if (confirmBox === true) {
            deletefunction(id)
        }
    }


    const deletefunction = (id) => {
        axios.delete(`http://localhost:8070/show/delete/${id}`).then((dat) => {

        }).
            catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Movie Name</th>
                    <th>Hall Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Ticket Price</th>
                    <th>Actions</th>
                </tr>
                {shows?.map((m, i) => (
                    <tr>
                        <td>{m.mid.name}</td>
                        <td>{m.hid.name}</td>
                        <td>{m.date}</td>
                        <td>{gettime(m.time)}</td>
                        <td>{m.price}</td>
                        <td><Link to={'/updateshow/' + m._id}><button>edit</button></Link>
                            <button onClick={(e) => { deleteconfirm(m._id) }}>delete</button>
                        </td>
                    </tr>
                ))}

            </table>

        </div >
    );
}

export default AllShows;