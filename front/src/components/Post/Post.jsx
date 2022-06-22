import React from 'react';
import './Post.scss';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h4>{post.title}</h4>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default Post;
