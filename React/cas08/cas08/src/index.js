import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <Route path="/" component={App}>
    </Route>
</BrowserRouter>,document.getElementById('root'));


