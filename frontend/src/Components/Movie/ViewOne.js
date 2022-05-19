import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getShows } from '../../Actions/ShowActions';
import '../../Assets/Styles/one.css'
import NavBar_Home from '../../Components/Home/NavBar_Home';

function ViewOne(props) {
    const [movie, setmovie] = useState({});
    const [area, setarea] = useState([]);
    const { shows } = useSelector(state => state.shows);

    const dispatch = useDispatch()


    useEffect(() => {

        axios.get(`http://localhost:8280/movies/getmovie/${props.match.params.id}`).then((data) => {

            setmovie(data.data)
            setarea(data.data.area)

        }).catch((err) => {
            console.log(err)
        })

        // Get all "navbar-burger" elements
        const $navbarBurgers = document.querySelectorAll('.navbar-burger')

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });

    }, [])

    useEffect(() => {
        dispatch(getShows(props.match.params.id))
    }, [])
    let range
    const getTime = (ind) => {

        if (ind === 1) {
            range = "10.00am - 1.00pm"
        } else if (ind === 2) {
            range = "1.00pm - 4.00pm"
        } else if (ind === 3) {
            range = "4.00pm - 7.00pm"
        }
    }
    return (
        <>
            <NavBar_Home />
            <div className='container-fluid mov '>
                <div className="mc-movie row">
                    <div className=" co3-movie col-12">
                        <div className='row'>
                            <div className='col-12'>
                                <a href="#"><img src={"http://localhost:8070/" + movie?.image} alt="cover" className="cover-movie" /></a>
                                <div className="hero-movie">
                                    <div className="details">
                                        <div className="title1">{movie?.name} <span>PG-13</span></div>
                                    </div> {/* end details */}
                                </div> {/* end hero */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="description">

                                    <div className="column1">
                                        {area.map(s => (
                                            <span className="tag">{s.name}</span>
                                        ))}


                                    </div>
                                    <div className="column2">
                                        <p>{movie.description}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {shows.length > 0 ? <>

                    <div className='row'>
                        <div className='col-10'>
                            <table>
                                <tr>
                                    <th>No</th>
                                    <th>Hall Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th></th>
                                </tr>
                                {shows.map((s, i) => (
                                    <tr>
                                        <td>{(i + 1)}</td>
                                        <td>{s.name}</td>
                                        <td>{s.date}</td>
                                        {getTime(s.time)}
                                        <td>{range}</td>
                                        {(localStorage.getItem('token')) || (localStorage.getItem('atoken')) ? (
                                            <td><Link to={`/booking/${s._id}`}><button className='btn btn-success' >Book</button></Link></td>
                                        ) : (
                                            <td><Link to={`/login`}><button className='btn btn-success' disabled={localStorage.getItem('token') || localStorage.getItem('atoken')}>Please Login to Book</button></Link></td>

                                        )}
                                    </tr>
                                ))}

                            </table>
                        </div>
                    </div>
                </> : <>
                    <h1>There are No shows Allocated Yet</h1>
                </>}


            </div>

        </>
    );
}

export default ViewOne;