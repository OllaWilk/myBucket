import React from 'react';

import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__footer">
      <p>@ created by:</p>
      <div className="app__footer-links">
        <BsGithub />
        <a href="https://github.com/OllaWilk">Aleksandra Wilk</a>
      </div>
    </footer>
  );
};

export default Footer;
