import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import React, { useEffect, useState } from 'react';
import '../../Assets/Styles/cart.css'
function Cart(props) {
    var it = JSON.parse(localStorage.getItem("cart"))
    var user = JSON.parse(localStorage.getItem("user"))
    const [cartitems, setcartitems] = useState(it)

    const [total, settotal] = useState(0)
    console.log(cartitems)
    useEffect(() => {
        calctotal()
    }, [cartitems])
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartitems))


    }, [cartitems])

    const calctotal = () => {
        for (var i = 0; i < cartitems?.length; i++) {
            settotal(total + cartitems[i].total)
        }
    }




    const removecart = (id) => {
        setcartitems(cartitems.filter(item => item.num !== id))
    }

    const bookmovies = () => {
        const data = {
            cart: cartitems,
            uid: user._id,

        }
        axios.post('http://localhost:8070/booking', data).then((resu) => {

        }).catch((err) => {
            console.log(err)
        })


        axios.put(`http://localhost:8070/show/updatecart`, data).then((da) => {
            alert("booked")
        }).catch((err) => {
            console.log(err)
        })

        localStorage.setItem("cart", null)

        window.location.href = '/all';
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-9 col-md-9 col-sm-12 col-12">
                        <div className="card_cart">
                            <div className="table-responsive">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Movie</th>
                                            <th scope="col" >Quantity</th>
                                            <th scope="col" >Price</th>
                                            <th scope="col" className="text-right " />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartitems?.map((m, i) => (

                                            <tr className='table_row'>
                                                <td>
                                                    <figure className="itemside align-items-center">
                                                        <div className="aside"><img src={"http://localhost:8070/" + m.mov?.image} className="img-sm" /></div>
                                                        <figcaption className="info">
                                                            <h3 className='txt'>{m.mov.name}</h3>
                                                            <p className="text-muted small txt2">{m.show.date}<br /> 11.00pm</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>{m.tickets} </td>
                                                <td>
                                                    <div className="price-wrap"> <var className="price">${m.total}</var> <small className="text-muted"> ${m.show.price} </small> </div>
                                                </td>
                                                <td className="text-right d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light" data-abc="true" onClick={(e) => { removecart(i) }}> <i className="fa fa-trash" /></a> </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <aside className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-10 ">
                        <div className="card mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group"> <label>Have coupon?</label>
                                        <div className="input-group"> <input type="text" className="form-control coupon" name placeholder="Coupon code" /> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <dl className="dlist-align">
                                    <dt>Total price:</dt>
                                    <dd className="text-right ml-3">$69.97</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd className="text-right text-danger ml-3">- $10.00</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Total:</dt>
                                    <dd className="text-right text-dark b ml-3"><strong>${total}</strong></dd>
                                </dl>
                                <hr />
                                <StripeCheckout
                                    shippingAddress
                                    currency='LKR'
                                    amount={total}
                                    token={bookmovies}
                                    stripeKey="pk_test_51KON7QSGc2uzmcTNMsY4QEFqEOPT7kUQaFthMpzSvbbeDYNxBvvPTkiZDnQhMMuuLadaLvFR36OxyQBbVKmXkYnT000ZDxnzBd"
                                >
                                    <a href="#" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a>
                                </StripeCheckout> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>



        </div>

    );
}

export default Cart;