import React, { useEffect, useState } from 'react';
import '../../Assets/Styles/cart.css'
import NavBar_Home from '../Home/NavBar_Home';
function Cart(props) {
    var it = JSON.parse(localStorage.getItem("cart"))
    const [cartitems, setcartitems] = useState(it)
    const [total, settotal] = useState(0)
    console.log(cartitems)
    useEffect(() => {
        calctotal()

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

    }, [cartitems])

    const calctotal = () => {
        for (var i = 0; i < cartitems.length; i++) {
            settotal(total + cartitems[i].total)
        }
    }
    return (
        <>
            <NavBar_Home />
            <section className="hero is-fullheight-with-navbar movie-div all-home-flexs">
                <div className="hero-body" style={{ padding: '3rem 0.5rem' }}>
                    <div className="container is-widescreen">
                        <div className="columns is-justify-content-center">
                            <div className="column is-9">
                                <div className="card">
                                    <div className="card p-1">
                                        <table className="table is-striped is-narrow is-hoverable is-fullwidth ">
                                            <thead>
                                                <tr className="is-uppercase">
                                                    <th scope="col"><div className="">Movie</div></th>
                                                    <th scope="col" ><div className="">Quantity</div></th>
                                                    <th scope="col" ><div className="">Price</div></th>
                                                    <th scope="col"  ><div className="" style={{ float: 'right' }}>Action</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartitems.map((m, i) => (

                                                    <tr key={i}>
                                                        <td>
                                                            <figure className="is-flex is-align-items-center">
                                                                <img src={"http://localhost:8070/" + m.mov.image} style={{ height: '120px' }}/>
                                                                <figcaption style={{paddingLeft: '0.25rem'}} className="pl-2">
                                                                    <h3><b>{m.mov.name}</b></h3>
                                                                    <p className="has-text-grey">{m.show.date}<br /> 11.00pm</p>
                                                                </figcaption>
                                                            </figure>
                                                        </td>
                                                        <td><div className="ml-5 pl-3 has-text-danger"><b>{m.tickets}</b> </div></td>
                                                        <td>
                                                            <div className="price-wrap">
                                                                <var style={{ fontWeight: '600', color: '#212529' }} >
                                                                    <div>${m.total}</div>
                                                                </var>
                                                                <small className="has-text-grey">
                                                                    <div> ${m.show.price}</div>
                                                                </small>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{ float: 'right' }}>
                                                            <a className="button is-light " > <i className="fa fa-heart " /></a>
                                                            <a className="button is-danger" > <i className="fa fa-trash" /></a>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">

                                        <form>
                                            <div className="form-group"> <label>Have coupon?</label>
                                                <div className="input-group"> <input type="text" className="input" name placeholder="Coupon code" />
                                                    <span className="input-group-append">
                                                        <button className="button is-danger is-outlined is-fullwidth ">Apply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div className="card mt-3">
                                    <div className="card-content">
                                        <dl className="is-flex">
                                            <dt>Total price:</dt>
                                            <dd className="text-right ml-3">$69.97</dd>
                                        </dl>
                                        <dl className="is-flex">
                                            <dt>Discount:</dt>
                                            <dd className="text-right text-danger ml-3">- $10.00</dd>
                                        </dl>
                                        <dl className="is-flex">
                                            <dt>Total:</dt>
                                            <dd className="text-right text-dark b ml-3"><strong>${total}</strong></dd>
                                        </dl>
                                        <hr />
                                        <a href="#" className="button is-primary is-outlined is-fullwidth" data-abc="true"> Make Purchase </a>
                                        <a href="#" className="button is-info is-outlined mt-2 is-fullwidth" data-abc="true">Continue Shopping</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;