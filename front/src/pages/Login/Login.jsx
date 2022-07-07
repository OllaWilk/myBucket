import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiUser } from 'react-icons/bi';
import { authActions } from '../../store';

import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signUp, setSignUp] = useState(false);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const requestToServer = async (type = 'login') => {
    const response = await axios
      .post(`http://localhost:3000/api/users/${type}`, {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .catch((error) => console.log(error));

    const data = await response.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    signUp
      ? requestToServer('signup')
          .then(() => dispatch(authActions.login()))
          .then(() => navigate('/'))
          .then((data) => console.log(data))
      : requestToServer()
          .then(() => dispatch(authActions.login()))
          .then(() => navigate('/'))
          .then((data) => console.log(data));
  };

  return (
    <div className="container app__login-form">
      <BiUser />
      <form onSubmit={handleSubmit}>
        <div className="app__cart-form">
          {signUp && (
            <input
              placeholder="name"
              value={input.name}
              onChange={handleChange}
              name="name"
            />
          )}
        </div>
        <div className="app__cart-form">
          <input
            type={'email'}
            placeholder="e-mail"
            value={input.email}
            onChange={handleChange}
            name={'email'}
          />
        </div>
        <div className="app__cart-form">
          <input
            type={'password'}
            placeholder="password"
            value={input.password}
            onChange={handleChange}
            name={'password'}
          />
        </div>
        {!signUp ? (
          <button type="submit">login</button>
        ) : (
          signUp && <button>sign up</button>
        )}

        <div className="app__login-switch" onClick={() => setSignUp(!signUp)}>
          {!signUp ? (
            <p>
              Don't have an account yet? <span>Sign up</span>
            </p>
          ) : (
            <p>
              Do you have an account? <span>Log in</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
