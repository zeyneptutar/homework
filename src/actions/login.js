import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';

const login = createAction('login');
export const clearLoginState = createAction('clearLoginState');

export function loginRequest(username, password) {
  return dispatch => {
    if (JSON.parse(localStorage.getItem("user")).username === username &&
      JSON.parse(localStorage.getItem("user")).password === password) {
      
      dispatch(login({success: true}));
      browserHistory.push('/mainpage');
    }
    else {
      dispatch(login({ errors: "User does not exist "}));
    }
  }
}