import React from 'react';
import logo from '../path/to/your/logo.png'; 

const Header = ({ batchName }) => {
  return (
    <header>
      <img src={logo} alt="PN Logo" />
      <h1>{batchName}</h1>
    </header>
  );
};

export default Header;