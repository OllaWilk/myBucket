import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { BiExit, BiUser } from 'react-icons/bi';

import './Auth.scss';
import { authActions } from '../../store';

const Auth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="app__auth">
      {!isLoggedIn && (
        <Link to="/login">
          <BiUser />
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/login" onClick={() => dispatch(authActions.logout())}>
          <BiExit />
        </Link>
      )}
    </div>
  );
};

export default Auth;
