import * as types from '../actionTypes';
const initState = {
    deviceList: [
        {
            deviceName: 'DVR-DP2-16',
            UID: 'UX6XL******0901lA1',
            info: {
                totalSpace: '2G',
                freeSpace: '325M',
                mac: '54:2B:57:30:04:AA',
                channelNum: 6
            },
            channel: ['CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6'],
            Group: 'DVR-DP2-16'
        }
    ]
};


const reducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default reducer;