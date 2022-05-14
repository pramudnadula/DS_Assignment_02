import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditShow(props) {

    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const [price, setprice] = useState('')
    const [hall, sethall] = useState('')
    const [mov, setmov] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8070/show/getone/${props.match.params.id}`).then((data) => {
            setmov(data.data.mid.name)
            sethall(data.data.hid.name)
            settime(data.data.time)
            setprice(data.data.price)
            setdate(data.data.date)

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const updateshow = (e) => {
        e.preventDefault()
        const show = {
            date,
            time,
            price
        }
        axios.put(`http://localhost:8070/show/updateone/${props.match.params.id}`, show).then((da) => {
            alert("updsted")
            window.location.href = "/allshow"

        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div>
            <form onSubmit={updateshow}>
                <label>Movie Name</label>
                <input type='text' value={mov} readOnly onChange={(e) => { setmov(e.target.value) }} /><br></br>

                <label>Hall Name</label>
                <input type='text' value={hall} readOnly onChange={(e) => { sethall(e.target.value) }} /><br></br>

                <label>Show date</label>
                <input type='date' value={date} onChange={(e) => { setdate(e.target.value) }} /><br></br>

                <select onChange={(e) => { settime(e.target.value) }} value={time}>
                    <option >select option</option>
                    <option value="1">10.00am - 1.00 pm</option>
                    <option value="2">1.00pm - 4.00 pm</option>
                    <option value="3">4.00pm - 7.00 pm</option>
                </select><br></br><br></br>

                <label>show price</label>
                <input type='text' value={price} onChange={(e) => { setprice(e.target.value) }} /><br></br>

                <input type='submit' value="save" />
            </form>

        </div>
    );
}

export default EditShow;