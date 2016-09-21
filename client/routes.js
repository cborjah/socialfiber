import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import UserQuestionnaire from './containers/userQuestionnaire';
import CreateUser from './components/createUser';

export default (
  <Route path="/" component={App}>
    <Route path='userQuestionnaire' component={UserQuestionnaire}/>
    <Route path='createUser' component={CreateUser} />
  </Route>
);
