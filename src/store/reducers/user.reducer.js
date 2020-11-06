import * as types from '../actionTypes';
const initState = {
    loginInfo: {
        userName: '123456',
        displayName: 'TUTK 管理者',
        cellphone: {
            areaCode: '+886',
            no: '9123456789'
        },
        lineID: '@12981kd',
        email: 'tutkadmin@tutk.com',
        pwd: '123456'
    },
    subUsers: [
        {
            userName: 'Genreal',
            displayName: '總務室',
            cellphone: {
                areaCode: '+886',
                no: '912999999'
            },
            lineID: '@geno1lsa1',
            email: 'tutkgeneral@tutk.com',
            pwd: ''
        }
    ]
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SETUP_ADD_SUBUSER: {
            const initSubUser = {
                userName: '',
                displayName: '',
                cellphone: {
                    areaCode: '',
                    no: ''
                },
                lineID: '',
                email: '',
                pwd: ''
            }
            const subUsers = [...state.subUsers, initSubUser];
            return { ...state, subUsers };
        }

        case types.SETUP_SAVE_SUBUSER: {
            state.subUsers[action.payload.index] = action.payload.user;
            return state;
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