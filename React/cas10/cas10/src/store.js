import {createStore, applyMiddleware} from 'redux'; // applyMiddleware e za da mozeme da pravime asinhroni funkcii
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import combine from './reducers' // go importirame fajlot od celiot FOLDER

const middleware = applyMiddleware(thunk, createLogger());  // ova funkcionira kako fiskalen aparat, odnosno vodi informacii za azuriranje

export default createStore(combine, middleware);