import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'; // so as se kreira alias koj mozeme da go koristeme namesto BrowserRouter
import {App} from './components/App';

import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(

  <Provider store={store}>
  <Router>
    <Route path="/" component={App} />
  </Router>
  </Provider>,
  document.getElementById('root'));
