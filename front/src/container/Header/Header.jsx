import React from 'react';
import { Navbar, Logo } from '../../components';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="app__header">
      <Link to="/home">
        <Logo />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
