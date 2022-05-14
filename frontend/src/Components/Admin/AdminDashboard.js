import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../Assets/Styles/admindash.css'
function AdminDashboard(props) {
    const [count, setcount] = useState()

    useEffect(() => {
        axios.get('http://localhost:8070/show/analytic').then((data) => {
            setcount(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className='container-fluid'>
            <div className='row addash'>
                <div className="col-xl-3">
                    <div className="card bg-c-blue order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Shows Ongoing</h6>
                            <h2 className="text-right mt-3"><i className="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p className="m-b-0"><span className="f-right">{count?.scount}</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3">
                    <div className="card bg-c-green order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Movies</h6>
                            <h2 className="text-right mt-3"><i className="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p className="m-b-0"><span className="f-right">{count?.mcount}</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3">
                    <div className="card bg-c-yellow order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Movie Halls</h6>
                            <h2 className="text-right mt-3"><i className="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p className="m-b-0"><span className="f-right">{count?.hcount}</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3">
                    <div className="card bg-c-pink order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Users</h6>
                            <h2 className="text-right mt-3"><i className="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p className="m-b-0"><span className="f-right">{count?.ucount}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminDashboard;