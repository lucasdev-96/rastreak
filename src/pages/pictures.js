import React from 'react';
import '../styles/Pictures.css';
import Header from '../components/Header';
import arrayPictures from '../services/arrayOfPictures';

function pictures() {
  return (
    <div className="pattern_pictures">
      <Header />
      <section className="father_pictures">
        {arrayPictures.map((elem) => (
          <img className="pictures" key={elem} src={elem} alt="rastreak" />
        ))}
      </section>
    </div>
  );
}

export default pictures;
