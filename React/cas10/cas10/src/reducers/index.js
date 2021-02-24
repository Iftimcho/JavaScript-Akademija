import {combineReducers} from 'redux';

// sekoj reducer treba da go vnesime vo ovoj fajl
import SayHelloReducer from './SayHelloReducer'; // bidejki napravive export default vo SayHelloReducer.js ne go importirame so {}

export default combineReducers({
    SayHelloReducer,
})