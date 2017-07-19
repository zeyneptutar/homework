import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const getUsers = createAction('getUsers');
const createNewUser = createAction('createNewUser');
const removeUser = createAction('removeUser');
const showUser = createAction('showUser');
const updateUser = createAction('updateUser');

export const clearUserState = createAction('clearUserState');

export function createUserRequest(username, password, name, surname, roles) {
  return dispatch => {
    var user = {
      "username": username,
      "password": password,
      "name": name,
      "surname": surname,
      "roles": roles
    }
    if (localStorage.getItem(username) === null) {

      setLocaleStorageUser(user);

      dispatch(getUsersFromLocalStorage);
      browserHistory.push('/users');
    } else {
      swal({
        title: "Username already exist",
        type: "error"
      });
    }

  }
}

export function destroyUserRequest(username) {
  return dispatch => {
    if (username !== "Demo") {
      localStorage.removeItem(username);
      dispatch(removeUser({username}));
    } else {
      swal({
        title: "Demo user can not delete",
        type: "error"
      });
    }
  }
}

export function showUserRequest(username, key) {
  return  dispatch => {
    var user = getUser(username);
    dispatch(showUser({user: user}));
  }
}

export function updateUserRequest(firstUsername, username, password, name, surname, roles) {
  //If you want to update localstorage data
  //you need do remove it and create new

  return dispatch => {
    dispatch(destroyUserRequest(firstUsername));
    dispatch(createUserRequest(username, password, name, surname, roles));
  }
}

export function getUsersFromLocalStorage() {
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

function getUser(username) {
  return JSON.parse(localStorage.getItem(username));
}