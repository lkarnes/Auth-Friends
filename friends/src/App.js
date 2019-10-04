import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import HomePage from './components/HomePage';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path='/' component={HomePage}/>
          <PrivateRoute exact path='/friendslist' component={FriendsList}/>
          <Route path='/login' component={Login}/>
      </div>
    </Router>
    
  );
}

export default App;
