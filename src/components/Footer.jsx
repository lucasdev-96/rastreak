import React from 'react';
import '../styles/Footer.css';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
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
            <a
              href="https://play.google.com/store/apps/details?id=br.com.rastrek.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={googleplay} alt="googlePlay" style={{ width: '150px' }} />
            </a>
            <a
              href="https://apps.apple.com/us/app/rastrek-2-0/id1398123951?l=pt&ls=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={apple} alt="googlePlay" style={{ width: '150px' }} />
            </a>
          </div>
        </div>
        <div className="infos_person">
          <span>
            <HiOutlineMail className="icons_info" />
            andretietz1@gmail.com
          </span>
          <span>
            <HiLocationMarker className="icons_info" />
            Rua Regente Feijó, 294
          </span>
          <span>
            <a
              className="author"
              href="https://www.facebook.com/rastrekpiracicabasp/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook className="icons_info" />
            </a>
            Facebook
          </span>
          <span>
            <a
              className="author"
              href="https://www.instagram.com/rastrek.piracicaba.sp/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="icons_info" />
            </a>
            Instagram
          </span>
        </div>
      </section>
      <span>
        Design by
        <a
          href="https://www.linkedin.com/in/lucas-godoi96/"
          className="author"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Godoi
        </a>
      </span>

    </footer>
  );
}

export default Footer;
