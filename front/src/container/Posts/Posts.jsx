import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'react-loader-spinner';

import { Post } from '../../components';

import './Posts.scss';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <section>
      {!posts.length ? (
        <div className="loading-wrap">
          <Grid color="grey" height={40} width={80} />
          <p>
            Here is no posts yet. <br />
          </p>
        </div>
      ) : (
        <div className="app__posts-wrap">
          {posts &&
            posts.map((post) => (
              <Post key={post._id} post={post} setCurrentId={setCurrentId} />
            ))}
        </div>
      )}
    </section>
  );
};

export default Posts;
