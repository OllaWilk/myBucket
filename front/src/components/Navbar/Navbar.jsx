import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      {
        <ul className="app__navigation-top-bar ">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          {['posts', 'faq'].map((item) => (
            <li key={item}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      }
    </nav>
  );
};

export default Navbar;
