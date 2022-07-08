import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

import './Form.scss';

const Form = ({ currentId, setCurrentId }) => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    image: '',
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setInput(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, input));
    } else {
      dispatch(createPost(input));
    }

    setCurrentId(null);
    setInput({
      title: '',
      description: '',
      category: '',
      location: '',
      image: '',
    });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {currentId ? 'Edit' : 'Add New'} experiences or activities to try:
      </h3>
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
        {/* <FileBase 
          type="file"
          multiple= {false}
          onDone={(base64) => setInput({ ...input, selectedFile: base64})}
        /> */}
        <input
          name="image"
          type="text"
          value={input.image}
          onChange={handleChange}
        />
        <label>image url</label>
      </div>

      <button type="submit">send</button>
    </form>
  );
};

export default Form;
