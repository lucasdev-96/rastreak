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
      </span>
    </header>
  );
}

export default Header;
