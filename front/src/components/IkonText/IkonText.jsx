import React from 'react';

import './IkonText.scss';

const IkonText = ({ ikon, text }) => {
  return (
    <p className="ikon-text">
      {ikon} {text}
    </p>
  );
};

export default IkonText;
