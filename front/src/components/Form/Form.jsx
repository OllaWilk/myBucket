import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

import './Form.scss';

const Form = ({ currentId, setCurrentId }) => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    location: '',
    image: '',
  });

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState(null);

  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setInput(post);
  }, [post]);

  const clearFields = () => {
    setCurrentId(null);
    setInput({
      title: '',
      description: '',
      location: '',
      image: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyFields = [];

    emptyFields.map((emptyField) => console.log(emptyField));

    if (!input.title) {
      emptyFields.push(' title');
    }
    if (!input.description) {
      emptyFields.push(' description ');
    }
    if (!input.location) {
      emptyFields.push(' location ');
    }
    if (emptyFields.length > 0) {
      if (
        emptyFields.includes(' title') ||
        emptyFields.includes(' description ') ||
        emptyFields.includes(' location ')
      ) {
        return [
          setEmptyFields(emptyFields),
          setError(`Please fill in the fields: ${emptyFields} `),
        ];
      }
    }

    if (currentId) {
      dispatch(updatePost(currentId, input));
    } else {
      dispatch(createPost(input));
    }

    setError(null);
    setEmptyFields([]);
    clearFields();
  };

  const handleChange = async (e) => {
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
          className={emptyFields.includes(' title') ? 'error' : ''}
        />
        <label>title</label>
      </div>
      <div className="app__cart-form">
        <input
          name="description"
          type="text"
          value={input.description}
          onChange={handleChange}
          className={emptyFields.includes(' description ') ? 'error' : ''}
        />
        <label>description </label>
      </div>

      <div className="app__cart-form">
        <input
          name="location"
          type="text"
          value={input.location}
          onChange={handleChange}
          className={emptyFields.includes(' location ') ? 'error' : ''}
        />
        <label>location</label>
      </div>
      <div className="app__cart-form">
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setInput({ ...input, image: base64 })}
        />
        <label>image url</label>
      </div>

      <button type="submit">send</button>
      <div className="app__clear-btn" onClick={clearFields}>
        clear
      </div>
      <Link className="app__close-btn" to={'/posts'}>
        close form
      </Link>
      {error && <div className="app__form-error-message">{error}</div>}
    </form>
  );
};

export default Form;
