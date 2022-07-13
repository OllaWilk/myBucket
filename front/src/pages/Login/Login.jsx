import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BiUser } from 'react-icons/bi';
import { AiOutlineMail, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { API } from '../../api/index';
import AuthContext from '../../context/AuthProvider';
import './Login.scss';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [email, password]);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const toggleMode = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = { email, password };

    try {
      const response = await axios.post(
        'mybucket-app-alex-wilk.herokuapp.com/api/users/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(response);
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));

      setAuth({ email, password });
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

      errRef.current.focus();
    }

    // setSuccess(true);
  };

  const handleChange = (e) => {};

  return (
    <>
      {success ? (
        <section className="app__auth-welcom">
          <h1> You are logged in!</h1>
          <br />
          <Link to={'/board'}>Go to Board page</Link>
        </section>
      ) : (
        <div className="container app__login-form">
          <BiUser />
          <p
            ref={errRef}
            className={error ? 'error' : 'no-error'}
            aria-live="assertive"
          >
            {error}
          </p>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">login</button>
            <div className="app__login-switch">
              <Link to={'/signup'}>
                Don't have an account yet? <span>Sign up</span>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
