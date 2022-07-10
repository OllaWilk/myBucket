import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const login = (loginInput, navigate) => async (dispatch) => {
  try {
    navigate('/', { replace: true });
  } catch (error) {}
};

export const signup = (loginInput, navigate) => async (dispatch) => {
  try {
    navigate('/', { replace: true });
  } catch (error) {
    console.log(error);
  }
};
