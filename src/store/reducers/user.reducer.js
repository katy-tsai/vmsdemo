import * as types from '../actionTypes';
import { uuid } from '../../utils/dataUtils';
const initState = {
    loginInfo: {
        "id": 1,
        "userId": "A402C9BD97C74BD530",
        "userName": "mainclient",
        "displayName": "TUTK 管理者",
        "cellphone": {
            "areaCode": "+886",
            "no": "9123456789"
        },
        "lineID": "@12981kd",
        "email": "tutkadmin@tutk.com",
        "pwd": "123456",
        "role": "client.main",
        "mainUser": "",
        "vender": ""
    },
    subUsers: []
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
                role: "client.main",
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

        default:
            return state;
    }
};

export default reducer;