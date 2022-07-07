import React from 'react';
import { Navbar, Logo, Login } from '../../components';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="app__header">
      <Link to="/">
        <Logo props={'my bucket'} />
      </Link>
      <div className="app__header-nav">
        <Navbar />
        <Login />
      </div>
    </header>
  );
};

export default Header;
