import React from 'react';
import { Link } from 'react-router-dom';
import { Posts } from '../../container';
import { Form, IkonText } from '../../components';

import { BiAddToQueue } from 'react-icons/bi';
import './Board.scss';

const Board = () => {
  return (
    <div className="container">
      <Posts />
      <div className="form-wrap">
        <Form />
      </div>
      <Link to={'/add'} className="toggle-form-btn">
        <IkonText ikon={<BiAddToQueue />} text={'Add post'} />
      </Link>
    </div>
  );
};

export default Board;
