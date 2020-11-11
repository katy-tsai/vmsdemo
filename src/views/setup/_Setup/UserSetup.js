import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../../../components/form/UserForm';
import { getUsersInfo, addSubUser, saveSubUser, saveUser } from '../../../store/action/users.action';
const userId = 'A402C9BD97C74BD530';

const UserSetup = () => {
    const userInfo = useSelector(state => state.user);
    const { subUsers, loginInfo } = userInfo;
    const dispatch = useDispatch();

    useEffect(() => {
        function fetchData() {
            dispatch(getUsersInfo(userId));
        }
        fetchData();
    }, [dispatch]);

    useEffect(() => {

    }, [loginInfo, subUsers]);
    const addSubUserHandler = () => {
        dispatch(addSubUser());
    }
    const saveUSubUserHandler = (user, index) => {
        dispatch(saveSubUser(user, index));
    }
    const saveUserHandler = (user) => {
        dispatch(saveUser(user));
    }
    console.log('subUsers=', subUsers)
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