import { handleActions } from 'redux-actions';
import _ from 'lodash';

const initialUsersState = {
  data: [],
  user: [],
}

export function clearUserState() {
  return initialUsersState;
}

export function createNewUser(state, action) {
  return {
    ...state,
  }
}

export function getUsers(state, { payload: data}) {
  return {
    ...state,
    ...data
  }
}

export function removeUser(state, {payload: username}) {
  let userName = username.username;
  return {
    ...state,
    data: _.values(state.data).filter(user => user.username !== userName),
  }
}

export function showUser(state, {payload: user}) {
  return {
    ...state,
    ...user,
  }
}

export function updateUser(state, {payload: user}) {
  return {
    ...state,
    ...user,
  }
}

export default handleActions({
  clearUserState,
  createNewUser,
  getUsers,
  removeUser,
  showUser,
  updateUser,
}, initialUsersState);
