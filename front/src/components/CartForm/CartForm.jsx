import React from 'react';

import './CartForm.scss';

const CartForm = ({ lebel, setValue, value }) => {
  return (
    <div className="app__cart-form">
      <label>{lebel}</label>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default CartForm;
