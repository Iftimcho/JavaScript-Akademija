import {FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS} from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (error) => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchCommentsRequests = () => {
    return dispatch => {
        fetch('http://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(json => dispatch(fetchCommentsSuccess(json))) // rezultatot go zapisuvame vo globalen state
        .catch(err => dispatch(fetchCommentsFail(err)))
    }
}