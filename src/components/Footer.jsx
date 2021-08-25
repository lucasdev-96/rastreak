import React from 'react';
import '../styles/Footer.css';
import logoFooter from '../img/logo-footer.png';
import googleplay from '../img/playstore-button.png';
import apple from '../img/apple.png';

function Footer() {
  return (
    <footer className="footer_father">
      <section>
        <div className="footer_info">
          <img src={logoFooter} className="logo" alt="logo" />
          <p>Baixe nosso Aplicativo</p>
          <div className="apps">
            <button type="button">
              <img src={googleplay} alt="googlePlay" style={{ width: '150px' }} />
            </button>
            <button type="button">
              <img src={apple} alt="googlePlay" style={{ width: '150px' }} />
            </button>
          </div>
        </div>
        <div>
          oi
        </div>
      </section>
    </footer>
  );
}

export default Footer;
