import React from 'react';
import { Link } from 'react-router-dom';

import { BiExit, BiUser } from 'react-icons/bi';

import './Auth.scss';

const Auth = () => {
  return (
    <div className="app__auth">
      {
        <Link to="/login">
          <BiUser />
        </Link>
      }
      {
        <Link to="/login">
          <BiExit />
        </Link>
      }
    </div>
  );
};

export default Auth;
