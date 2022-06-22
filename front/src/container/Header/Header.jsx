import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <p>header section</p>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
