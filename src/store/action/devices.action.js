import * as types from '../actionTypes';
import { getDevicesByUser, getChannelsByUser, getGroupsByUser } from '../../api';
import { devicesJoinChannls, channelsJoinUserMember } from '../../utils/dataUtils';

export function getUserDevices(userId) {
    return async (dispatch) => {
        const devices = await getDevicesByUser(userId);
        const channels = await getChannelsByUser(userId);
        const groups = await getGroupsByUser(userId);
        const deviceList = devicesJoinChannls(devices, channelsJoinUserMember(channels, groups));
        return dispatch(getUserDeviceSuccess(deviceList));
    };
}

export function getUserDeviceSuccess(deviceList) {
    return {
        type: types.DEVICES_QUERY,
        payload: {
            deviceList,
        }
    }
}