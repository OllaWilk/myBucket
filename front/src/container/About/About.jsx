import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

import './About.scss';

const About = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <section className="app__about-page container">
      <div className="app__about-img">
        <img src={images.homepageblack} alt="man on rock" />
      </div>
      <div className="app__about-text">
        {!isLoggedIn && (
          <Link to={'/login'} className="app_header-wrap">
            <img src={images.logo40x40} alt="logo square" />

            <h2>Create Your own Bucket list here</h2>
            <p>
              Bucket List is a list of things that you want to do before you
              "kick the bucket", but it is really about living life to the
              fullest with all the hours you have left on Earth. This app will
              help you to focus on your goals and dreams.
            </p>
          </Link>
        )}

        {isLoggedIn && (
          <Link to={'/posts'} className="app_header-wrap">
            <img src={images.logo40x40} alt="logo square" />

            <h2>Go to Youre Bucket list here</h2>
            <p>
              Bucket List is a list of things that you want to do before you
              "kick the bucket", but it is really about living life to the
              fullest with all the hours you have left on Earth. This app will
              help you to focus on your goals and dreams.
            </p>
          </Link>
        )}
        <div>
          <p className="p-text">
            Create a collection of goals, dreams and aspirations that you would
            like to accomplish within your lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
