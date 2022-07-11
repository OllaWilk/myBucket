import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const login = (loginInput, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(loginInput);

    dispatch({ type: AUTH, data });

    // navigate('/', { replace: true });
  } catch (error) {}
};

export const signup = (loginInput, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(loginInput);

    dispatch({ type: AUTH, data });
    navigate('/', { replace: true });
  } catch (error) {
    console.log(error);
  }
};
