import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddAPhoto } from 'react-icons/md';

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

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    return setInput({ ...input, image: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
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
        <label className="app__cart-form-choose-file">
          <MdAddAPhoto /> Select Photo
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
        </label>
        <img src={input.image} height="200px" alt={setInput.image} />
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
