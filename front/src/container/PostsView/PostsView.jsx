import React from 'react';
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';
import { Form, Post } from '../../components';

import './PostsView.scss';

const PostsView = () => {
  const [posts, setPosts] = useState(null);
  // const { posts, dispatch } = usePostsContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3000/api/posts');
      // const response = await fetch('/api/posts');
      const json = await response.json();

      if (response.ok) {
        // dispatch({
        //   type: 'SET_POSTS',
        //   payload: json,
        // });

        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="container">
      <div className="app__posts-wrap">
        {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
      <div className="app__form-wrap">
        <Form />
      </div>
    </section>
  );
};

export default PostsView;
