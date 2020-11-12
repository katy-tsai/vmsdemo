import * as types from '../actionTypes';
const initState = {
    videoChannels: [],
    channelList: [],
    viewType: 4,
    playList: [],
    viewNum: 0
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.VIDEO_LIVE_INIT: {
            return { ...action.payload };
        }
        case types.CHANNELS_QYERY: {
            return { ...state, channelList: action.payload.channelList };
        }
        default:
            return state;
    }
};

export default reducer;