import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from './store';
import Login from './containers/Login';
import MainPage from './containers/MainPage';
import User from './containers/User';
import NewUser from './containers/NewUser';
import About from './containers/About';
import './index.css';
import { INITIAL_STATE } from './constants/AppConstants';

const store = configure(INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
        <Route path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/mainpage" component={MainPage}/>
        <Route path="/users" component={User}/>
        <Route path="/users/new" component={NewUser}/>
        <Route path="/users/:username" component={About}/>
    </Router>
  </Provider>
  , document.getElementById('root')
);
