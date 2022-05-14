import axios from 'axios';
import React, { useState } from 'react';
//import { message } from 'antd'

function AddHall(props) {
    const [name, setname] = useState("")
    const [cols, setcols] = useState("")
    const [rows, setrows] = useState("")
    const [rate, setrate] = useState("")

    const createHall = (e) => {
        e.preventDefault()

        const hall = {
            name,
            cols,
            rows,
            rate
        }

        axios.post('http://localhost:8070/hall', hall).then((data) => {

        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <section className="hero is-fullheight admin-div">
            <div className="hero-body" style={{ padding: '3rem 0.5rem' }}>
                <div className="container is-widescreen">
                    <div className='columns is-justify-content-center'>
                        <div className='column is-6'>
                            <div className="card" style={{ backgroundColor: '#fff6' }}>
                                <div className='title is-2 has-text-danger-dark has-text-centered has-background-danger-light pb-3 pt-2'>
                                    <b>Adding Halls</b>
                                </div>
                                <form onSubmit={createHall}>
                                    <div className="field has-addons m-3 pt-3">
                                        <div className="control is-expanded">
                                            <div className="is-fullwidth">
                                                <input type="text" className="input" onChange={(e) => { setname(e.target.value) }} placeholder="name" aria-label="Username" />
                                            </div>
                                        </div>
                                        <div className="button control is-static">
                                            <span className="icon is-left">
                                                <i className="fa fa-film"></i>
                                            </span>
                                            <div type="submit" className=" is-primary is-static mr-6 pr-3">Name</div>
                                        </div>
                                    </div>
                                    <div className="field has-addons m-3 pt-3">
                                        <div className="control is-expanded">
                                            <div className="is-fullwidth">
                                                <input type="text" className="input" onChange={(e) => { setrows(e.target.value) }} placeholder="name" aria-label="Username" />
                                            </div>
                                        </div>
                                        <div className="button control is-static">
                                            <span className="icon is-left">
                                                <i className="fa fa-film"></i>
                                            </span>
                                            <div type="submit" className=" is-primary is-static mr-5 pr-3">Seat rows</div>
                                        </div>
                                    </div>
                                    <div className="field has-addons m-3 pt-3">
                                        <div className="control is-expanded">
                                            <div className="is-fullwidth">
                                                <input type="text" className="input" onChange={(e) => { setcols(e.target.value) }} placeholder="name" aria-label="Username" />
                                            </div>
                                        </div>
                                        <div className="button control is-static">
                                            <span className="icon is-left">
                                                <i className="fa fa-film"></i>
                                            </span>
                                            <div type="submit" className=" is-primary is-static">Seats for a row</div>
                                        </div>
                                    </div>
                                    <div className="field has-addons m-3 pt-3">
                                        <div className="control is-expanded">
                                            <div className="is-fullwidth">
                                                <input type="text" className="input" onChange={(e) => { setrate(e.target.value) }} placeholder="name" aria-label="Username" />
                                            </div>
                                        </div>
                                        <div className="button control is-static">
                                            <span className="icon is-left">
                                                <i className="fa fa-film"></i>
                                            </span>
                                            <div type="submit" className=" is-primary is-static mr-6 pr-5">Rate</div>
                                        </div>
                                    </div>
                                    <div className=" has-background-danger-light pt-1 pb-2">
                                        <div className=" mt-5 mr-3 ml-3 pb-3 ">
                                            <button className="button is-danger is-fullwidth " type="submit" value="create" >Create</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddHall;