import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <ul className="app__navigation-top-bar ">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {['posts'].map((item) => (
          <li key={`link-${item}`}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
        <li>
          <Link to={'/faq'}>faq</Link>
        </li>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <Link to={'/'} onClick={() => setToggle(false)}>
                  Home
                </Link>
              </li>
              {['posts'].map((item) => (
                <li key={item}>
                  <Link to={`/${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={'/faq'}>faq</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
