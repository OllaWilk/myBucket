import React from 'react';
import { useEffect, useState } from 'react';
import { Form, Post } from '../../components';

import './PostsView.scss';

const PostsView = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section>
      {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      <Form />
    </section>
  );
};

export default PostsView;
