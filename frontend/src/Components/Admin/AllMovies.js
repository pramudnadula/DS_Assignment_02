import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getmovies } from '../../Actions/MovieActions';
import '../../Assets/Styles/user.css'
import axios from 'axios';

function AllMovies(props) {
    const { movies } = useSelector(state => state.movies);
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getmovies())
    }, [movies])


    const deleteconfirm = (id) => {

        const confirmBox = window.confirm(
            "All The bookings and shows related to that movie will be Deleted"
        )
        if (confirmBox === true) {
            deletefunction(id)
        }
    }

    const deletefunction = (id) => {
        axios.delete(`http://localhost:8070/movies/delete/${id}`).then((dat) => {

        }).
            catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-10 m_table'>
                    <table className="table table-hover table-dark m_table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((mov, i) => (
                                <tr>
                                    <th scope="row">{(i + 1)}</th>
                                    <td> <img src={"http://localhost:8070/" + mov.image} alt="movie poster" className="pro_user" /></td>
                                    <td>{mov.name}</td>
                                    <td>{mov.description}</td>
                                    <td>{mov.rate}</td>

                                    <td><Link to={'/updatemovie/' + mov._id}><a className='btn btn-warning'><i class="fa fa-pencil" aria-hidden="true"></i></a></Link></td>
                                    <td><a className='btn btn-danger' onClick={(e) => { deleteconfirm(mov._id) }}><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>

                                </tr>
                            ))}




                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AllMovies;