import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
const createNewUser = createAction('createNewUser');
const getUsers = createAction('getUsers');
const removeUser = createAction('removeUser');
const showUser = createAction('showUser');

export function createUserRequest(username, password, name, surname, roles) {
  return dispatch => {
    var user = {
      "username": username,
      "password": password,
      "name": name,
      "surname": surname,
      "roles": roles
    }
    setLocaleStorageUser(user);

    dispatch(createNewUser);
    browserHistory.push('/users');
  }
}

export function destroyUserRequest(username) {
  return dispatch => {
    if (username !== "Demo") {
      localStorage.removeItem(username);
      dispatch(removeUser({username}));
    } else {
      alert("Demo user can not delete");
    }
  }
}

export function showUserRequest(username) {
  return  dispatch => {
    var user = JSON.parse(localStorage.getItem(username));
    dispatch(showUser({user: user}));
  }
}


export function getUsersFromLocalStorage() {
  console.log('getUsersFromLocalStorage');
  return dispatch => {
    var users = {};
    for (var key in localStorage){
      users[key] = JSON.parse(localStorage.getItem(key));
    }
    dispatch(getUsers({data: users}));
  }
}

function setLocaleStorageUser(user){
  if (JSON.parse(localStorage.getItem(user.username)) === null) {
    localStorage.setItem(user.username, JSON.stringify(user));
  };
}