import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { PUBLIC_GOOGLE_API_TOKEN } from './constants/variables';
import { Home, Board, FAQ, NotFound, Login, Signup } from './pages';
import { Footer, Header } from './container';
import { Form } from './components';

import './styles/global.scss';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={PUBLIC_GOOGLE_API_TOKEN}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/board" element={<Board />} />
          <Route path="/add" element={<Form />} />
          <Route path="/myposts/:id" />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
