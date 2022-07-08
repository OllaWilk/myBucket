import React from 'react';

// import { usePostsContext } from '../../hooks/usePostsContext';
import { FaTrashAlt, FaMapMarkerAlt, FaHashtag } from 'react-icons/fa';
import IkonText from '../IkonText/IkonText';

import './Post.scss';

const Post = ({ post }) => {
  // const { dispatch } = usePostsContext();

  // const handleClick = async () => {
  //   const postID = post._id;
  //   const response = await fetch('http://localhost:3000/api/posts/' + postID, {
  //     method: 'DELETE',
  //   });

  //   const json = await response.json();

  //   if (response.ok) {
  //     dispatch({ type: 'DELETE_POST', payload: json });
  //   }
  // };

  return (
    <div className="app__posts">
      <div className="app__post-content-wrap">
        <h4>{post.title}</h4>
        <p className="app__post-text">{post.description}</p>
        <div className="app__tags-location-wrap">
          <IkonText ikon={<FaHashtag />} text={post.category} />
          <IkonText ikon={<FaMapMarkerAlt />} text={post.location} />
        </div>
      </div>
      <div className="app__post-functions">
        <span>
          {/* <span onClick={handleClick}> */}
          <FaTrashAlt />
        </span>
        <p className="app__post-date"> {post.createdAt}</p>
      </div>
    </div>
  );
};

export default Post;
