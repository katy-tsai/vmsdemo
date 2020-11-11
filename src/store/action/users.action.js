import * as types from '../actionTypes';
import { getUsersByCondition, getUsersByUser, insertUsers, updateUsers } from '../../api';


export function getUsersInfo(userId) {
    return async (dispatch) => {
        const loginInfo = await getUsersByUser(userId);
        const subUsers = await getUsersByCondition({
            mainUser: userId
        });
        return dispatch(getUserInfo(loginInfo, subUsers));
    };

}

export function getUserInfo(loginInfo, subUsers) {
    return {
        type: types.SETUP_INIT_USERDATA,
        payload: {
            loginInfo: loginInfo[0],
            subUsers
        }
    }
}

export function saveUser(user) {
    return async (dispatch, getState) => {
        const state = getState();
        user = { ...state.user.loginInfo, ...user };
        const updateUser = await updateUsers(user);
        return dispatch(saveUserSuccess(updateUser));
    };
}
export function saveUserSuccess(user) {
    return {
        type: types.SETUP_SAVE_MAINUSER,
        payload: {
            user
        }
    }
}

export function addSubUser() {
    return {
        type: types.SETUP_ADD_SUBUSER
    }
}

export function saveSubUser(user, index) {

    return async (dispatch, getState) => {
        const state = getState();
        console.log(state)
        user = { ...state.user.subUsers[index], ...user };
        if (user.id) {
            const updateSubuser = await updateUsers(user);
            return dispatch(addSubuserSuccess(updateSubuser, index));
        } else {
            const insertSubuser = await insertUsers(user);
            return dispatch(addSubuserSuccess(insertSubuser, index));
        }

    };
}

export function addSubuserSuccess(user, index) {
    return {
        type: types.SETUP_SAVE_SUBUSER,
        payload: {
            user,
            index
        }
    }
}