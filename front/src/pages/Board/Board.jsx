import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Posts } from '../../container';
import { Form, IkonText } from '../../components';

import { BiAddToQueue } from 'react-icons/bi';
import './Board.scss';

const Board = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div className="container">
      <Posts setCurrentId={setCurrentId} />
      <div className="form-wrap">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <Link to={'/add'} className="toggle-form-btn">
        <IkonText ikon={<BiAddToQueue />} text={'Add post'} />
      </Link>
    </div>
  );
};

export default Board;
