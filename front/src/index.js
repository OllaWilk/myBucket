import React from 'react';
import ReactDOM from 'react-dom/client';
import { PostsContextProvider } from './context/PostsContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </React.StrictMode>
);
