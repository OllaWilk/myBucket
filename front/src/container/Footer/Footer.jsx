import React from 'react';

import { BsGithub } from 'react-icons/bs';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__footer">
      <p>@ created by:</p>
      <div className="app__footer-links">
        <BsGithub />
        <a href="https://github.com/OllaWilk/myBucket">Aleksandra Wilk</a>
      </div>
    </footer>
  );
};

export default Footer;
