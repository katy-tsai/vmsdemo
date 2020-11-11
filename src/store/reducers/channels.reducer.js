import * as types from '../actionTypes';
const initState = {
    channelList: [],
    viewType:4,
    playList:[],
    viewNum:0
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.VIDEO_LIVE_INIT:{
            return {...action.payload};
        }
        default:
            return state;
    }
};

export default reducer;