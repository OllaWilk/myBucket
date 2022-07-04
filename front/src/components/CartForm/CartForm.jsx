import React from 'react';

import './CartForm.scss';

const CartForm = ({ lebel, setValue, value, style }) => {
  return (
    <div className="app__cart-form">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={style}
      />
      <label>{lebel}</label>
    </div>
  );
};

export default CartForm;
