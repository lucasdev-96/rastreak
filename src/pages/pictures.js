import React from 'react';
import '../styles/Pictures.css';
import Header from '../components/Header';
import arrayPictures from '../services/arrayOfPictures';
import Footer from '../components/Footer';

function pictures() {
  return (
    <>
      <Header />
      <div className="pattern_pictures">
        <section className="father_pictures">
          {arrayPictures.map((elem) => (
            <img className="pictures" key={elem} src={elem} alt="rastreak" />
          ))}
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default pictures;
