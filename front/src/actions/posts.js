import * as api from '../api';
import {
  SET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: SET_POSTS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);

    const data = await response.data;

    dispatch({ type: CREATE_POST, payload: data });

    console.log('Sucess! Post added');
  } catch (err) {
    console.log('Fill the fields', err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({
      type: UPDATE_POST,
      payload: data,
    });
    console.log('Sucess! Post updated');
  } catch (err) {
    console.log("Can't update post", err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: id });
    console.log('Sucess! Post deleted');
  } catch (err) {
    console.log("Can't delete post", err);
  }
};
