import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(rootReducer, middleware);