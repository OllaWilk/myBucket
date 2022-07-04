import React, { useState } from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';
import { HiX } from 'react-icons/hi';

import CartForm from '../CartForm/CartForm';

import './Form.scss';

const Form = ({ toggle }) => {
  const { dispatch } = usePostsContext();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { name, description, category, location };

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
      setName('');
      setDescription('');
      setCategory('');
      setLocation('');
      setError(null);
      setEmptyFields([]);
      dispatch({ type: 'CREATE_POST', payload: json });
      console.log('new post added', json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HiX onClick={toggle} />
      <h3>Add New experiences or activities to try:</h3>
      <CartForm
        lebel={'name'}
        setValue={setName}
        value={name}
        style={emptyFields.includes('name') ? 'error' : ''}
      />
      <CartForm
        lebel={'description'}
        setValue={setDescription}
        value={description}
        style={emptyFields.includes('description') ? 'error' : ''}
      />
      <CartForm
        lebel={'category'}
        setValue={setCategory}
        value={category}
        style={emptyFields.includes('category') ? 'error' : ''}
      />
      <CartForm
        lebel={'location'}
        setValue={setLocation}
        value={location}
        style={emptyFields.includes('location') ? 'error' : ''}
      />
      <button>send</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Form;
