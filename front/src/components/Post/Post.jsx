import React from 'react';
import { usePostsContext } from '../../hooks/usePostsContext';

import './Post.scss';

const Post = ({ post }) => {
  const { dispatch } = usePostsContext();

  const handleClick = async () => {
    const postID = post._id;
    const response = await fetch('http://localhost:3000/api/posts/' + postID, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_POST', payload: json });
    }
  };

  return (
    <div className="app__posts">
      <h4>{post.title}</h4>
      <p>{post.createdAt}</p>
      <span onClick={handleClick}>DELETE</span>
    </div>
  );
};

export default Post;
