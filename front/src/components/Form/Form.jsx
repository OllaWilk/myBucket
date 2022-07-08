import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiX } from 'react-icons/hi';

import { createPost } from '../../actions/posts';

import './Form.scss';

const Form = ({ toggle }) => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    image: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(input));
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New experiences or activities to try:</h3>
      <div className="app__cart-form">
        <input
          name="title"
          type="text"
          value={input.title}
          onChange={handleChange}
        />
        <label>title</label>
      </div>
      <div className="app__cart-form">
        <input
          name="description"
          type="text"
          value={input.description}
          onChange={handleChange}
        />
        <label>description</label>
      </div>
      <div className="app__cart-form">
        <input
          name="category"
          type="text"
          value={input.category}
          onChange={handleChange}
        />
        <label>category</label>
      </div>
      <div className="app__cart-form">
        <input
          name="location"
          type="text"
          value={input.location}
          onChange={handleChange}
        />
        <label>location</label>
      </div>
      <div className="app__cart-form">
        <input
          name="image"
          type="text"
          value={input.image}
          onChange={handleChange}
        />
        <label>image</label>
      </div>

      <button type="submit">send</button>
    </form>
  );
};

export default Form;
