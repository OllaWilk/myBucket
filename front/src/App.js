import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './container';
import {
  Home,
  Posts,
  FAQ,
  NotFound,
  Login,
  UserPosts,
  PostDetail,
} from './pages';

import './styles/global.scss';

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {isLoggedIn && (
            <>
              <Route path="/browse" element={<Posts />} />
              <Route path="/posts" element={<UserPosts />} />
              <Route path="/myposts/:id" element={<PostDetail />} />
            </>
          )}
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
