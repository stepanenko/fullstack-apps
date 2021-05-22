
import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';

import Menu from './components/Menu';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </Menu>
      <Switch>
        <Route path='/home' component={Header} />
        <Route path='/login' component={Login} />
        <Route path='/not_found' component={NotFound} />
        <Redirect from='/' to='/home' exact />
        <Redirect to='not_found' />
      </Switch>
    </div>
  );
}

export default App;
