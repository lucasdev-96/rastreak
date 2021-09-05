/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/Hero.css';

function Header() {
  const history = useHistory();
  const className = history.location.pathname === '/' ? 'header' : '';
  return (
    <header className={className}>
      <div>
        <img src={logo} alt="logo" className="header_img" />
      </div>
      <span className="links">
        <a href="#about">Quem somos</a>
        <a href="#main">Preços</a>
        <a href="#main">Contato</a>
        <a onClick={() => history.push('/fotos')}>Fotos</a>
      </span>
    </header>
  );
}

export default Header;
