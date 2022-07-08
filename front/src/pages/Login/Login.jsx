import React from 'react';
import { BiUser } from 'react-icons/bi';

import './Login.scss';

const Login = () => {
  return (
    <div className="container app__login-form">
      <BiUser />
      <form>
        <div className="app__cart-form">
          <input
            placeholder="name"
            // value={name}
            // onChange={handleChange}
            name="name"
          />
        </div>
        <div className="app__cart-form">
          <input
            type={'email'}
            placeholder="e-mail"
            // value={email}
            // onChange={handleChange}
            name="email"
          />
        </div>
        <div className="app__cart-form">
          <input
            type={'password'}
            placeholder="password"
            // value={input.password}
            // onChange={handleChange}
            name="password"
          />
        </div>

        <button type="submit">login</button>
        <button>sign up</button>

        <div className="app__login-switch">
          <p>
            Don't have an account yet? <span>Sign up</span>
          </p>

          <p>
            Do you have an account? <span>Log in</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
