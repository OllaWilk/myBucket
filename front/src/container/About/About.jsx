import React from 'react';
import { Link } from 'react-router-dom';
import { BiSkipNext } from 'react-icons/bi';
import { images } from '../../constants';

import './About.scss';

const About = () => {
  return (
    <section className="app__about-page container">
      <div className="app__about-img">
        <img src={images.homepageblack} alt="man on rock" />
      </div>
      <div className="app__about-text">
        <Link to={'/posts'} className="app_header-wrap">
          <img src={images.logo40x40} alt="logo square" />
          <h2>Create Your own Bucket list here</h2>
          <p>
            Bucket List is a list of things that you want to do before you "kick
            the bucket", but it is really about living life to the fullest with
            all the hours you have left on Earth. This app will help you to
            focus on your goals and dreams.
          </p>
        </Link>
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
