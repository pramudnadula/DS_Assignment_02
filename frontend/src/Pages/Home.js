import React, { useEffect } from 'react'
import "../Assets/Styles/home.css"
import NavBar_Home from '../Components/Home/NavBar_Home';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../Assets/Styles/Slider.css'
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


  const slideImages = [
    {
      url: 'https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://i.ytimg.com/vi/586CpeypGkQ/maxresdefault.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.indianexpress.com/2022/05/doctor-strange-madness-multiverse-review-.jpg',
      caption: 'Slide 3'
    },
  ];

  return (

    <>
      <NavBar_Home />


      <section className="hero is-fullheight-with-navbar home-div">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        
        <div className="hero-body">
          <div className="container ">
            <div className='columns is-vcentered'>

            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Home