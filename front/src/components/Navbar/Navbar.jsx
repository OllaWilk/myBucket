import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BiExit, BiUser } from 'react-icons/bi';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logout = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });

    navigate('/', { replace: true });
    setUser(null);
  };

  return (
    <nav>
      <ul className="app__navigation-top-bar ">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {user &&
          ['board'].map((item) => (
            <li key={`link-${item}`}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        <li>
          <Link to={'/faq'}>faq</Link>
        </li>
      </ul>
      {/* 
      <div className="app__auth"> */}
      {user ? (
        <div className="app__auth">
          <div className="app__nav-user-img">'user.result.name.charAt(0)'</div>
          <Link to="/" id="logout" onClick={logout}>
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
      {/* </div> */}
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
