import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';

const login = createAction('login');
export const clearLoginState = createAction('clearLoginState');

export function loginRequest(username, password) {
  return dispatch => {
    if (JSON.parse(localStorage.getItem(username)).username === username &&
      JSON.parse(localStorage.getItem(username)).password === password) {
      
      dispatch(login({success: true}));
      browserHistory.push('/users');
    }
    else {
      dispatch(login({ errors: "User does not exist "}));
    }
  }
}