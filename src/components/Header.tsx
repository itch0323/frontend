import React from 'react';
import logo from "../logo.png"
import "../scss/header.scss"

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <h1>Sensory Friendly Guide</h1>
    </header>
  );
}

export default Header;
