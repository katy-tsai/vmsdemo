import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../components/form/UserForm';
import * as types from '../store/actionTypes';


const UserSetup = () => {
    const userInfo = useSelector(state => state.user);
    console.log(userInfo);

    const { subUsers, loginInfo } = userInfo;
    const dispatch = useDispatch();
    const addSubUserHandler = () => {
        dispatch({
            type: types.SETUP_ADD_SUBUSER
        });
    }
    const saveUSubUserHandler = (user, index) => {
        dispatch({
            type: types.SETUP_SAVE_SUBUSER,
            payload: {
                user,
                index
            }
        });
    }
    const saveUserHandler = (user) => {
        dispatch({
            type: types.SETUP_SAVE_MAINUSER,
            payload: {
                user
            }
        });
    }

    return (
        <>
            <UserForm data={loginInfo} isSub={false} addSubUser={addSubUserHandler} saveUser={saveUserHandler} />
            {
                subUsers.map((sub, index) => {
                    return <UserForm data={sub} isSub={true} key={`${sub.userName}_form_${index}`} saveUser={saveUSubUserHandler} index={index} />
                })
            }
        </>
    );
};

export default UserSetup;