import React, { useEffect, useState } from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';
import { BiAddToQueue } from 'react-icons/bi';
import { Form, Post, IkonText } from '../../components';

import './PostsView.scss';

const PostsView = () => {
  const { posts, dispatch } = usePostsContext();
  const [toggle, setToggle] = useState(true);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3000/api/posts');
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: 'SET_POSTS',
          payload: json,
        });
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <section className="container">
      <div className="app__posts-wrap">
        {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      </div>

      {toggle && (
        <div className="app__form-wrap ">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <Form toggle={toggleModal} />
          </div>
        </div>
      )}

      <div className="toggle-form-btn" onClick={toggleModal}>
        <IkonText ikon={<BiAddToQueue />} text={'Add post'} />
      </div>
    </section>
  );
};

export default PostsView;
