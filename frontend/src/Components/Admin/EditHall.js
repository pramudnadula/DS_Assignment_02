import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EditHall(props) {

    const [name, setname] = useState()
    const [rows, setrows] = useState()
    const [rate, setrate] = useState()
    const [cols, setcols] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8070/hall/getone/${props.match.params.id}`).then((data) => {
            setname(data.data.name)
            setrows(data.data.rows)
            setrate(data.data.rate)
            setcols(data.data.cols)

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const updateHall = (e) => {
        e.preventDefault()

        const mov = {
            rate,
            name
        }

        axios.put(`http://localhost:8070/hall/update/${props.match.params.id}`, mov).then((da) => {
            alert("updsted")
            window.location.href = "/allhalls"

        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <div>
            <form onSubmit={updateHall}>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => { setname(e.target.value) }} /><br></br>

                <label>Rows</label>
                <input type='text' value={rows} readOnly onChange={(e) => { setrows(e.target.value) }} /><br></br>

                <label>Seats for A Row</label>
                <input type='number' value={cols} readOnly onChange={(e) => { setcols(e.target.value) }} /><br></br>

                <label>Rate</label>
                <input type='number' value={rate} onChange={(e) => { setrate(e.target.value) }} /><br></br>
                <input type='submit' value="save" />
            </form>

        </div>
    );
}

export default EditHall;