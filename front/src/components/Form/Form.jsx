import React, { useState } from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';

import CartForm from '../CartForm/CartForm';

import './Form.scss';

const Form = () => {
  const { dispatch } = usePostsContext();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cathegory, setCathegory] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  // const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { name, description, cathegory, location };

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
      // setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setName('');
      setDescription('');
      setCathegory('');
      setLocation('');
      setError(null);
      // setEmptyFields([]);
      dispatch({ type: 'CREATE_POST', payload: json });
      console.log('new post added', json);
    }
  };

  return (
    <div className="app__form-wrap">
      <form onSubmit={handleSubmit}>
        <h3>Add New experiences or activities to try:</h3>
        <CartForm lebel={'name'} setValue={setName} value={name} />
        <CartForm
          lebel={'description'}
          setValue={setDescription}
          value={description}
        />
        <CartForm
          lebel={'cathegory'}
          setValue={setCathegory}
          value={cathegory}
        />
        <CartForm lebel={'location'} setValue={setLocation} value={location} />
        <button>post</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Form;
