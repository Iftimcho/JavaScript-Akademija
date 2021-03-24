import {combineReducers} from 'redux';
import CakeReducer from './CakeReducer';
import CommentsReducer from './CommentsReducer';
export default combineReducers({
    CakeReducer,
    CommentsReducer
})