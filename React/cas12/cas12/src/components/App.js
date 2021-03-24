import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Users} from './users';
import {Nav} from './Nav';

export function App() {
  return(
    <div id="app">
      <h2>Redux Duck setup</h2>
      <Nav />
      <Switch>
        <Route path="/users" component={Users}></Route>
      </Switch>
    </div>
  )
}