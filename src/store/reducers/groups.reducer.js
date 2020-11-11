import * as types from '../actionTypes';

const initState = {
    groupList: [],
};



const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GROUPS_QUERY: {
            return { ...action.payload };
        }
        default:
            return state;
    }
};

export default reducer;