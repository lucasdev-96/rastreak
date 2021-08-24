import React from 'react';
import '../styles/Hero.css';
import About from './About';
import Header from './Header';

function Hero() {
  return (
    <>
      <section className="hero_img">
        <div className="blur">
          <Header />
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
