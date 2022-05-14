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
                <div class="col-xl-3">
                    <div class="card bg-c-blue order-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Shows Ongoing</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p class="m-b-0"><span class="f-right">{count?.scount}</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3">
                    <div class="card bg-c-green order-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Movies</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p class="m-b-0"><span class="f-right">{count?.mcount}</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3">
                    <div class="card bg-c-yellow order-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Movie Halls</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p class="m-b-0"><span class="f-right">{count?.hcount}</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3">
                    <div class="card bg-c-pink order-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Users</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-cart-plus f-left"></i><span></span></h2>
                            <p class="m-b-0"><span class="f-right">{count?.ucount}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminDashboard;