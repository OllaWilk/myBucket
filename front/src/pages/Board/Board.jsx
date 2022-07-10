import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../../actions/posts';

import { Posts } from '../../container';
import { Form, IkonText } from '../../components';

import { BiAddToQueue } from 'react-icons/bi';
import './Board.scss';

const Board = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
