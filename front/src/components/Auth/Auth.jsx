import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiExit, BiUser } from 'react-icons/bi';

import './Auth.scss';

const Auth = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="app__auth">
      {!isLoggedIn && (
        <Link to="/login">
          <BiUser />
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/">
          <BiExit />
        </Link>
      )}
    </div>
  );
};

export default Auth;
