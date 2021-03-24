import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Cake} from './Cake';
import {Nav} from './Nav';
import {Comments} from './Comments';
import {Comment} from './Comment';
export function App() {
  return(
    <div id="app">
      <h2>React Redux </h2>
      <Nav />
      <Switch>
        <Route path="/cake" component={Cake} />
        <Route path="/comments" component={Comments} />
        <Route path="/comment/:Id" component={Comment} />
      </Switch>
    </div>
  )
}