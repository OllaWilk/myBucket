import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './container';
import { Home, Posts, FAQ, NotFound } from './pages';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
