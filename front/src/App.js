import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getPosts } from './actions/posts';

import { Home, Board, FAQ, NotFound, Login } from './pages';
import { Footer, Header } from './container';
import { Form } from './components';

import './styles/global.scss';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/posts"
            element={
              <Board currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
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
