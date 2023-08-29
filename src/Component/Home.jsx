import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';
import portfolioImage from '../images/portfolio-image.jpg';
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  useEffect(() => {
    // Typed.js initialization
    const typed = new Typed(".text", {
      strings: ["Full Stack Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <section className="home">
      <div className="home-photo">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Tanuj Masiwal</h1>
          <h3>And I'm a <span className="text"></span></h3>
          <p>I'm a Full Stack Web Developer</p>
        </div>
        <div className="photo">
        <img src={portfolioImage} alt="" />
        </div>
      </div>
      <div className="home-sci">
        <a href="#"><i className='bx bxs-phone-call'></i></a>
        <a href="#"><i className='bx bxl-gmail'></i></a>
        <a href="#"><i className='bx bxl-github'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
      </div>
      <a href="#" className="btn-box">Resume</a>
    </section>
  );
};

export default Home;
