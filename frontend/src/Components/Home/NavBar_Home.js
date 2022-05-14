import React  from 'react'
import { Link } from 'react-router-dom'

function NavBar_Home() {

  // let [user, setUser] = useState();

  // useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     setUser(user);
  //     console.log(user);

  // }, []);
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" target="_blank" href="https://www.sliit.lk/">
          <img src="https://static.sliit.lk/wp-content/uploads/2017/12/sliit-web-logo.png" alt='logo' height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <Link to="/" className="navbar-item"> <i className="navbar-item fas fa-home"></i> Home </Link>
          <Link to="/all" className="navbar-item"><i className="navbar-item fa fa-film"></i>  All Movies </Link>
          {(localStorage.getItem('token')) && (
            <>
            <Link to="/mybookings" className="navbar-item"><i className="navbar-item fa fa-video-camera"></i> My Movies </Link>
            <Link to="/cart" className="navbar-item"><i className="navbar-item fa fa-cart-arrow-down"></i>My Cart </Link>
            </>
            )}
          <Link to="/qrread" className="navbar-item"> <i className="navbar-item fa fa-qrcode" aria-hidden="true"></i>QR Reader </Link>
       
        </div>

        <div className="navbar-end">

        {(localStorage.getItem('token')) && (
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Menu
            </a>
            <div className="navbar-dropdown">
               <Link to="/mybookings" className="navbar-item"><i className="fa fa-video-camera mr-2"></i> My Movies </Link>
            <Link to="/cart" className="navbar-item"><i className="fa fa-cart-arrow-down mr-2"></i>My Cart </Link>

              <hr className="navbar-divider" />
              <a className="navbar-item"onClick={(e) => {
									localStorage.clear();
									window.location.href='/'
								}}>
                
                <b> Sign Out </b>
              </a>
            </div>
          </div>
        )}



          <div className="navbar-item">
            <div className="buttons">

            {!(localStorage.getItem('token')) && (
              <>
              <Link to="/login"><button className="button is-success mr-3">Login</button></Link>
              <Link to="/register"><button className="button is-danger">Register</button></Link>
              
              </>
            )}


            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar_Home