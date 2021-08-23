import React from 'react';
import '../styles/Hero.css';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo.png';
import About from './About';

function Hero() {
  const history = useHistory();
  const className = history.location.pathname === '/' ? 'hero_img' : '';
  return (
    <>
      <section className={className}>
        <div className="blur">
          <header>
            <div>
              <img src={logo} alt="logo" className="header_img" />
            </div>
            <span className="links">
              <a href="#about">Quem somos</a>
              <a href="#main">Preços</a>
              <a href="#main">Contato</a>
            </span>
          </header>
          <div className="hero_msg">
            <h1>Tranquilidade para você, sua família ou seu negócio!</h1>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}

export default Hero;
