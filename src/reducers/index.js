import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login';
import user from './user';

export default combineReducers({
  routing,
  login,
  user
});
