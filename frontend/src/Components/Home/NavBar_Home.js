import React from 'react'
import { Link } from 'react-router-dom'

function NavBar_Home() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="" alt='logo' height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <Link to="/" className="navbar-item"> Home </Link>


          <Link to="/dashboard" className="navbar-item"> Dashboard </Link>
          <Link to="/pipeline" className="navbar-item"> Pipeline </Link>
          <Link to="/application" className="navbar-item"> Application </Link>


        </div>

        <div className="navbar-end">


          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Menu
            </a>
            <div className="navbar-dropdown">
              <Link to="/myaccount#settings" className="navbar-item"> Settings </Link>
              <Link to="/myaccount" className="navbar-item"> My Account </Link>

              <hr className="navbar-divider" />
              <a className="navbar-item">
                <b> Sign Out </b>
              </a>
            </div>
          </div>




          <div className="navbar-item">
            <div className="buttons">


              <button className="button is-success">Login</button>



            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar_Home