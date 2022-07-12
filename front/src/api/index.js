import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://mybucket-app-alex-wilk.herokuapp.com',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get('/api/posts');
export const createPost = (newPost) => API.post('/api/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/api/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/posts/${id}`);

export const logIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
