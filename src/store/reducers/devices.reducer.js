import * as types from '../actionTypes';

const initState = {
    deviceList: [],
};



const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.DEVICES_QUERY: {
            return { ...action.payload };
        }
        default:
            return state;
    }
};

export default reducer;