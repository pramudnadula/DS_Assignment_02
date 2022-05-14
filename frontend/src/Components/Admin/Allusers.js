import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Allusers(props) {
    const [nusers, setnusers] = useState([])
    const [ausers, setausers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8070/user/all').then((data) => {
            setnusers(data.data.nusers)
            setausers(data.data.ausers)
        }).catch((err) => {

        })
    }, [nusers, ausers])

    const deleteconfirm = (id) => {

        const confirmBox = window.confirm(
            "All The bookings related to that User will be Deleted"
        )
        if (confirmBox === true) {
            deletefunction(id)
        }
    }
    const deleteconfirmadmin = (id) => {

        const confirmBox = window.confirm(
            "Are you sure"
        )
        if (confirmBox === true) {
            deletefunction(id)
        }
    }



    const deletefunction = (id) => {
        axios.delete(`http://localhost:8070/user/delete/${id}`).then((dat) => {

        }).
            catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <table>
                <h2>Customers</h2>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>UserName</th>
                    <th></th>

                </tr>

                {nusers?.map((us, i) => (
                    <tr>
                        <td>{us.name}</td>
                        <td>{us.email}</td>
                        <td>{us.userName}</td>
                        <th><button onClick={(e) => { deleteconfirm(us._id) }}>remove</button></th>

                    </tr>
                ))}
            </table>


            <table>
                <h2>Movie Admins</h2>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>UserName</th>
                    <th></th>

                </tr>

                {ausers?.map((us, i) => (
                    <tr>
                        <td>{us.name}</td>
                        <td>{us.email}</td>
                        <td>{us.userName}</td>
                        <th><button onClick={(e) => { deleteconfirmadmin(us._id) }}>remove</button></th>
                    </tr>
                ))}
            </table>

        </div>
    );
}

export default Allusers;