import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../../components';

import './Posts.scss';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <section>
      <div className="app__posts-wrap">
        {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </section>
  );
};

export default Posts;
