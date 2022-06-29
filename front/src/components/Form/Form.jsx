import React, { useState } from 'react';
import { CartForm } from '..';
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

    <form onSubmit={handleSubmit}>
      <h3>New experiences or activities to try:</h3>
      <CartForm lebel={'Title'} setValue={setTitle} value={title} />
      <CartForm lebel={'Author'} setValue={setAuthor} value={author} />
      <CartForm
        lebel={'File'}
        setValue={setSelectedFile}
        value={selectedFile}
      />
      <button>
        <p>Submit</p>
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Form;
