import React from 'react';
import '../styles/Hero.css';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

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
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
