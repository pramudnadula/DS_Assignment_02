import React, { useEffect, useState } from 'react';
import axios from 'axios';
function EditMovie(props) {
    const [name, setname] = useState()
    const [description, setdescription] = useState()
    const [rate, setrate] = useState()
    const [image, setimage] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8070/movies/getone/${props.match.params.id}`).then((data) => {
            setname(data.data.name)
            setdescription(data.data.description)
            setrate(data.data.rate)
            setimage(data.data.image)

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const updatemovie = (e) => {
        e.preventDefault()

        const mov = {
            rate,
            description
        }

        axios.put(`http://localhost:8070/movies/update/${props.match.params.id}`, mov).then((da) => {
            alert("updsted")
            window.location.href = "/allmovies"

        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <div>
            <form onSubmit={updatemovie}>
                <img style={{ width: "200px" }} src={"http://localhost:8070/" + image} alt="movie poster" className="movie-poster" /><br></br>
                <label>Name</label>
                <input type='text' value={name} readOnly onChange={(e) => { setname(e.target.value) }} /><br></br>

                <label>description</label>
                <input type='text' value={description} onChange={(e) => { setdescription(e.target.value) }} /><br></br>

                <label>Ratings</label>
                <input type='number' value={rate} onChange={(e) => { setrate(e.target.value) }} /><br></br>

                <input type='submit' value="save" />
            </form>

        </div>
    );
}

export default EditMovie;