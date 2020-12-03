import * as types from '../actionTypes';
import { uuid } from '../../utils/dataUtils';
const initState = {
    loginInfo: {
        "id": 1,
        "userId": "A402C9BD97C74BD530",
        "userName": "tutkadmin@tutk.com",
        "displayName": "TUTK 管理者",
        "cellphone": {
            "areaCode": "+886",
            "no": "9123456789"
        },
        "lineID": "@12981kd",
        "email": "tutkadmin@tutk.com",
        "pwd": "123456",
        "role": "client.main",
        "mainUser": "A402C9BD97C74BD530",
        "vender": ""
    },
    subUsers: [],
    userList: []
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SETUP_INIT_USERDATA: {
            return { ...action.payload };
        }
        case types.SETUP_ADD_SUBUSER: {
            const initSubUser = {
                userId: uuid(),
                userName: '',
                displayName: '',
                cellphone: {
                    areaCode: '',
                    no: ''
                },
                lineID: '',
                email: '',
                pwd: '',
                role: "client.sub",
                mainUser: state.loginInfo.userId,
                vender: state.loginInfo.vender
            }
            const subUsers = [...state.subUsers, initSubUser];
            return { ...state, subUsers };
        }

        case types.SETUP_SAVE_SUBUSER: {
            state.subUsers[action.payload.index] = action.payload.user;
            return { ...state };
        }

        case types.SETUP_SAVE_MAINUSER: {
            const loginInfo = { loginInfo: action.payload.user };
            return { ...state, loginInfo };
        }
        case types.USERS_QYERY: {
            return { ...state, userList: action.payload.userList };
        }
        default:
            return state;
    }
};

export default reducer;