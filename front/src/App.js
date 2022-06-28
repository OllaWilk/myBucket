import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './container';
import { Home, Post } from './pages';

import './styles/global.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
