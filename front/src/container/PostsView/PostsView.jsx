import React from 'react';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';
import { Form, Post } from '../../components';

import './PostsView.scss';

const PostsView = () => {
  // const [posts, setPosts] = useState(null);
  const { posts, dispatch } = usePostsContext();

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
    <section className="app__post-view-wrap">
      {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      <Form />
    </section>
  );
};

export default PostsView;
