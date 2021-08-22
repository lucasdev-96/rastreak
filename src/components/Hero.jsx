import React from 'react';
import '../styles/Hero.css'
import logo from '../img/logo.png';

function Hero() {

  return(
    <section className="hero_img">
    <header>
      <div>
    <img src={logo} alt="logo"  className="header_img"/>
    </div>
    <span className="links">
      <a href="#main">Quem somos</a>
      <a href="#main">Preços</a>
      <a href="#main">Contato</a>
      </span>
    </header>
   </section>
  )
}

export default Hero;