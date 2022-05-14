import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getHalls } from '../../Actions/Hall';
import axios from 'axios';
function AllHalls(props) {
    const { halls } = useSelector(state => state.halls);
    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getHalls())
    }, [halls])

    const deleteconfirm = (id) => {

        const confirmBox = window.confirm(
            "All The  shows related to that Hall will be Deleted"
        )
        if (confirmBox === true) {
            deletefunction(id)
        }
    }

    const deletefunction = (id) => {
        axios.delete(`http://localhost:8070/hall/delete/${id}`).then((dat) => {

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
                                <th scope="col">Name</th>
                                <th scope="col">Seat Rows</th>
                                <th scope="col">Seats for one column</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {halls.map((mov, i) => (
                                <tr>
                                    <th scope="row">{(i + 1)}</th>
                                    <td>{mov.name}</td>
                                    <td>{mov.rows}</td>
                                    <td>{mov.cols}</td>
                                    <td>{mov.rate}</td>

                                    <td><Link to={'/updatehall/' + mov._id}><a className='btn btn-warning'><i class="fa fa-pencil" aria-hidden="true"></i></a></Link></td>
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

export default AllHalls;