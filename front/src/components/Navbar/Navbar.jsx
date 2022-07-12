import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BiExit, BiUser } from 'react-icons/bi';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const user = null;

  return (
    <nav>
      <ul className="app__navigation-top-bar ">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {!user &&
          ['board'].map((item) => (
            <li key={`link-${item}`}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        <li>
          <Link to={'/faq'}>faq</Link>
        </li>
      </ul>

      {user ? (
        <div className="app__auth">
          <div className="app__nav-user-img">
            {user?.decodedData.name.charAt(0)}
          </div>
          <Link to="/" id="logout" onClick={() => {}}>
            <BiExit />
          </Link>
        </div>
      ) : (
        <div className="app__auth">
          <Link to="/login">
            <BiUser />
          </Link>
        </div>
      )}

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
              {user &&
                ['board'].map((item) => (
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
