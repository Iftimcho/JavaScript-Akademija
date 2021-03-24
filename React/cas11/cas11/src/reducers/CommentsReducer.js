import {FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS} from './../constants/CommentsConstants'; 
const initialState = {
    comments: [],
    error: undefined
}

const CommentsReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_COMMENTS_SUCCESS:
                return {
                    ...state,
                    comments: action.payload
                }
            case FETCH_COMMENTS_FAIL: {
                return {
                    ...state,
                    error: action.payload
                }
            }
            default: return state;
        }
}

export default CommentsReducer;

