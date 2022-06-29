import React, { useState } from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';

import './Form.scss';

const Form = () => {
  const { dispatch } = usePostsContext();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { title, author, selectedFile };

    const response = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle('');
      setAuthor('');
      setSelectedFile('');
      setError(null);
      setEmptyFields([]);
      dispatch({ type: 'CREATE_POST', payload: json });
    }
  };

  return (
    <div className="app__form-wrap">
      <form onSubmit={handleSubmit}>
        <h3>add</h3>
        <label>Add title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label>Add author:</label>
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className={emptyFields.includes('author') ? 'error' : ''}
        />
        <label>Add file:</label>
        <input
          type="text"
          onChange={(e) => setSelectedFile(e.target.value)}
          value={selectedFile}
          className={emptyFields.includes('selectedFile') ? 'error' : ''}
        />
        <button>Add post</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Form;
