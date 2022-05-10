import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../Assets/Styles/home.css"
import pic1 from '../Assets/Images/download.jpg'
import MovieCard from '../Components/Movie/MovieCard'
function Home() {
  useEffect(() => {
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



  return (


      <section className="hero is-fullheight-with-navbar home-div">



        {/* Hero content: will be in the middle */}
        <div className="hero-body">
          <div className="container">
            <div className='columns is-vcentered'>
            <div className='col-12 backgroud'>


<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg" className="d-block w-100 change" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/586CpeypGkQ/maxresdefault.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.indianexpress.com/2022/05/doctor-strange-madness-multiverse-review-.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
            </div>
          </div>
        </div>
        {/* Hero footer: will stick at the bottom */}
        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered ">
              {/* Client / partner list */}
              <ul>
                <li><a><img className="hero-logo footer-icon" alt="aws" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="bitbucket" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
                <li><a><img className="hero-logo footer-icon" alt="gitlab" /></a></li>
              </ul>
            </div>
          </div>

        </div>







      {/* <div className="container">
        <div className="row">
        <div className="col-12">
        <p className="has-text-black">Action Movies Collection</p>
        </div>
      <div className='col-3'> */}
      {/* <MovieCard /> */}
      {/* </div>

</div>
</div> */}




</section>

  )
}

export default Home