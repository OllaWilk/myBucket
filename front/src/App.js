import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Board, FAQ, NotFound, Login } from './pages';
import { Footer, Header } from './container';
import { Form } from './components';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/board" element={<Board />} />
          <Route path="/add" element={<Form />} />
          <Route path="/myposts/:id" />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
