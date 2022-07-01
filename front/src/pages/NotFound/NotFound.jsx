import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="app__notFound">
      <h3>Oops..!</h3>
      <p>This is not the page you are looking for</p>
      <p className="error-number">404</p>
      <Link to="/">
        <span>go back to homepage</span>
      </Link>
    </div>
  );
};

export default NotFound;
