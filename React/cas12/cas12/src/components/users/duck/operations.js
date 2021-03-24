import actions from './actions';

import {getUsers, changeUser} from './../../../api/usersApi';



const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams)); // requestParams sea e prazno, no nekogas moze da ima
        return getUsers(requestParams)
        .then(result => {
            dispatch(actions.fetchUsersSuccess(result))
            return result;
        })
        .catch(err => {
            dispatch(actions.fetchUsersFail(err))
            return err;
        })
    }
}

const editUser = (requestParams) => {
    return dispath => {
        dispath(actions.editUserRequest(requestParams));
            return changeUser(requestParams)
                   .then(res => {
                       dispath(actions.editUserSuccess(res))
                       return res;
                   })
                   .catch(error => {
                       dispath(actions.editUserFail(error))
                       return error;
                   })
    }
}

export default {
    fetchUsers,
    editUser
};