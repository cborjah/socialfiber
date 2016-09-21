import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app.js';
import reducers from './reducers/index';
import UserQuestionnaire from './containers/userQuestionnaire';
import CreateUser from './components/createUser';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/userQuestionnaire' component={UserQuestionnaire}/>
      <Route path='/createUser' component={CreateUser} />
    </Router>
  </Provider>
, document.getElementById('main'));
