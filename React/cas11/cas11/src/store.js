import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'; // gi dava sostojbite na thunk-ot
import thunk from 'redux-thunk';
import combine from './reducers';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(combine, middleware);
