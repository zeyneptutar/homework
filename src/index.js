import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from './store';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import UsersPage from './containers/UsersPage';
import NewUserPage from './containers/NewUserPage';
import ProfilePage from './containers/ProfilePage';
import UpdateUserPage from './containers/UpdateUserPage';
import './index.css';
import { INITIAL_STATE } from './constants/AppConstants';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
        <Route path="/" component={LoginPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/mainpage" component={MainPage}/>
        <Route path="/users" component={UsersPage}/>
        <Route path="/users/new" component={NewUserPage}/>
        <Route path="/users/:username" component={ProfilePage}/>
        <Route path="/users/:username/update" component={UpdateUserPage}/>
    </Router>
  </Provider>
  , document.getElementById('root')
);
