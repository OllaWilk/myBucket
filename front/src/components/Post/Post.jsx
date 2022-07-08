import React from 'react';
import { FaTrashAlt, FaMapMarkerAlt, FaHashtag, FaEdit } from 'react-icons/fa';
import moment from 'moment';

import IkonText from '../IkonText/IkonText';
import { images } from '../../constants';

import './Post.scss';

const Post = ({ post, setCurrentId }) => {
  return (
    <div className="app__posts">
      <div className="app__post-img-wrap">
        {post.image && <img src={post.image} alt={post.title} />}
        {!post.image && <img src={images.homepage} alt={post.title} />}
      </div>

      <div className="app__post-content-wrap">
        <h4>{post.title}</h4>
        <p className="app__post-text">{post.description}</p>
        <div className="app__tags-location-wrap">
          <IkonText ikon={<FaHashtag />} text={post.category} />
          <IkonText ikon={<FaMapMarkerAlt />} text={post.location} />
        </div>
      </div>
      <div className="app__post-functions">
        <div>
          <span>
            <FaTrashAlt />
          </span>
          <span>
            <FaEdit onClick={() => setCurrentId(post._id)} />
          </span>
        </div>

        <p className="app__post-date">{moment(post.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default Post;
