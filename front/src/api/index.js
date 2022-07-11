import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mybucket-app-alex-wilk.herokuapp.com',
});

export const fetchPosts = () => API.get('/api/posts');
export const createPost = (newPost) => API.post('/api/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/api/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/posts/${id}`);

export const logIn = (loginInput) => API.post('/api/users/login', loginInput);
export const signUp = (loginInput) => API.post('/api/users/signup', loginInput);
