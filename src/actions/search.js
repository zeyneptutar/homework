import { createAction } from 'redux-actions';
import { getUsers } from './user';
const search = createAction('search');

export function searchRequest(query) {
  console.log(query);
  return dispatch => {
    var users = {}, result = {};
    for (var key in localStorage){
      users[key] = JSON.parse(localStorage.getItem(key));
      
      if (users[key].name.includes(query) ||
        users[key].surname.includes(query) ||
        users[key].username.includes(query)) {
        result[key] = users[key];
      };
    }
    dispatch(getUsers({data: result}));
  }
}