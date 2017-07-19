import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login';
import user from './user';
import chart from './chart';
import search from './search';

export default combineReducers({
  routing,
  login,
  user,
  chart,
  search
});
