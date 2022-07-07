import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PostsContextProvider } from './context/PostsContext';
import { store } from './store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PostsContextProvider>
  </React.StrictMode>
);
