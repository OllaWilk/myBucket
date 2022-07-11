import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { InputAuth } from '../../components';

import { BiUser } from 'react-icons/bi';

import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineUserAdd,
} from 'react-icons/ai';

import { login, signup } from '../../actions/auth';

import './Login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [loginInput, setLoginInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInput);

    if (!isLogin) {
      dispatch(login(loginInput, navigate('/board', { replace: true })));
    } else {
      dispatch(signup(loginInput, navigate('/board', { replace: true })));
    }
  };

  const handleChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container app__login-form">
      {!isLogin && <BiUser />}
      <form onSubmit={handleSubmit}>
        {isLogin && (
          <InputAuth
            name={'name'}
            placeholder={'name'}
            value={loginInput.name}
            handleChange={handleChange}
            ikon={<AiOutlineUserAdd />}
          />
        )}
        <InputAuth
          name={'email'}
          placeholder={'e-mail'}
          inputType={'email'}
          value={loginInput.email}
          handleChange={handleChange}
          ikon={<AiOutlineMail />}
        />
        <div className="app__login-cart-form ">
          <input
            name="password"
            type={showPassword ? 'password' : 'type'}
            placeholder="password"
            value={loginInput.value}
            onChange={handleChange}
          />
          <label
            className="password-ikon"
            onClick={handleShowPassword}
            style={{ cursor: 'pointer' }}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </label>
        </div>
        {isLogin && (
          <div className="app__login-cart-form ">
            <input
              name="confirmPassword"
              type={showPassword ? 'password' : 'type'}
              placeholder="confirm Password"
              value={loginInput.value}
              onChange={handleChange}
            />
            <label className="password-ikon">
              <AiFillEyeInvisible style={{ color: 'black' }} />
            </label>
          </div>
        )}
        <button type="submit"> {!isLogin ? 'login' : 'sign up'}</button>

        <div className="app__login-switch">
          {!isLogin ? (
            <p onClick={toggleMode}>
              Don't have an account yet? <span>Sign up</span>
            </p>
          ) : (
            <p onClick={toggleMode}>
              Do you have an account? <span>Login</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
