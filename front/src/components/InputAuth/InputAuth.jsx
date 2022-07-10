import React from 'react';

import './InputAuth.scss';

const InputAuth = ({
  name,
  inputType,
  placeholder,
  value,
  handleChange,
  ikon,
}) => {
  return (
    <div className="app__login-cart-form ">
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <label className="password-ikon">{ikon}</label>
    </div>
  );
};

export default InputAuth;
