import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/root_reducer';
import Cookies from 'js-cookie';
import SplashPg from './components/Public/SplashPg';
import SignUp from './components/Public/SignUp';
import SignIn from './components/Public/SignIn';
import Questionnaire from './components/User/Edit/Questionnaire';
import UserProfile from './components/User/UserProfile';
import BrowseProfile from './components/User/BrowseProfile';
import GroupPage from './components/Groups/GroupPage';
import AllGroups from './components/Browse/AllGroups';
import AllUsers from './components/Browse/AllUsers';
import _404Pg from './components/Public/_404Pg'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


const isAuthenticated = () => {
  return Cookies.get('token') && Cookies.get('authenticated');
}

const ensureAuthenticated = (nextState, replace) => {
  if(!isAuthenticated()) { replace('/signin'); }
}

const skipIfAuthenticated = (nextState, replace) => {
  if(isAuthenticated()) { replace('/userprofile'); }
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' onEnter={skipIfAuthenticated} component={SplashPg} />
    	<Route path='/signup' onEnter={skipIfAuthenticated} component={SignUp} />
    	<Route path='/signin' onEnter={skipIfAuthenticated} component={SignIn} />
    	<Route path='/questionnaire' onEnter={ensureAuthenticated} component={Questionnaire} />
      <Route path='/userprofile' onEnter={ensureAuthenticated} component={UserProfile} />
      <Route path='/browseprofile/:id' onEnter={ensureAuthenticated} component={BrowseProfile} />
      <Route path='/grouppage/:id/:groupname' onEnter={ensureAuthenticated} component={GroupPage} />
      <Route path='/viewallgroups' onEnter={ensureAuthenticated} component={AllGroups} />
      <Route path='/viewallusers' onEnter={ensureAuthenticated} component={AllUsers} />
      <Route path='*' component={_404Pg} />
    </Router>
  </Provider>
, document.getElementById('main'));
