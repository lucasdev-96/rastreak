import React from 'react';
import '../styles/Hero.css';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
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
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
