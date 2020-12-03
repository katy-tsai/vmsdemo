import * as types from '../actionTypes';

const initState = {
    floorPlanList: [],
};



const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.MAP_INIT: {
            return { ...action.payload };
        }
        default:
            return state;
    }
};

export default reducer;