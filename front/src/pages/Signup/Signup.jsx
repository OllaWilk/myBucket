import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import { BiUser } from 'react-icons/bi';
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import AuthContext from '../../context/AuthProvider';

import './Signup.scss';

const Signup = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    userRef.current?.focus(null);
  }, []);

  useEffect(() => {
    setError('');
  }, [email, password, name]);

  const handleShowPassword = () => setShowPassword(!showPassword);
  // const toggleMode = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password, name };

    try {
      const response = await fetch(
        'http://mybucket-app-alex-wilk.herokuapp.com/api/users/signup',
        {
          method: 'POST',
          body: JSON.stringify(user),
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      );
      console.log(response);
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));

      const accessToken = response?.data.accessToken;

      setAuth({ name, email, password, accessToken });
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      if (!err?.response) {
        setError('no server response');
      } else if (err.response?.status === 400) {
        setError('Missing user email or password');
      } else if (err.response?.status === 401) {
        setError('Soory. We did not found Youre account. Sign un');
      } else {
        setError('Login Failed');
      }

      errRef.current.focus(null);
    }

    // setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="app__auth-welcom">
          <h1> You are Sign up!</h1>
          <br />
          <Link to={'/board'}>Go to Board page</Link>
        </section>
      ) : (
        <div className="container app__login-form">
          <p>{error}</p>

          <form onSubmit={handleSubmit}>
            <div className="app__login-cart-form ">
              <input
                type="text"
                id="name"
                ref={userRef}
                // autoComplete="off"
                placeholder="name"
                onChange={(e) => setEmail(e.target.value)}
                value={name}
                // required
              />
              <label htmlFor="email" className="password-ikon">
                <AiOutlineUserAdd />
              </label>
            </div>
            <div className="app__login-cart-form ">
              <input
                type="text"
                // id="email"
                ref={userRef}
                // autoComplete="off"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                // required
              />
              <label htmlFor="email" className="password-ikon">
                <AiOutlineMail />
              </label>
            </div>
            <div className="app__login-cart-form ">
              <input
                id="password"
                type={showPassword ? 'password' : 'type'}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="password-ikon"
                onClick={handleShowPassword}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </label>
            </div>
            <div className="app__login-cart-form ">
              <GoogleLogin
                onSuccess={() => {}}
                onError={(response) => console.log(response)}
              />
            </div>
            <button type="submit">sign up</button>
            <div className="app__login-switch">
              <Link to={'/login'}>
                You have an account. <span>Login</span>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
