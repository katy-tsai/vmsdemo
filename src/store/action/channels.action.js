import * as types from '../actionTypes';
import { getChannelsByUser } from '../../api';
import { dataSetToArray } from '../../utils/dataUtils';

export const getLiveView = (userId, viewType, num) => {
    return async (dispatch) => {
        const channelData = await getChannelsByUser(userId);
        return dispatch(getLiveViewInit(channelData, viewType, num));
    };

}
export const getLiveViewInit = (channelData, viewType, num) => {
    const defaultVidoList = Array(viewType).fill({ "channelName": "", "deviceUID": "", "channelId": "", "states": "" });

    const { playList, channelList } = dataSetToArray(channelData, defaultVidoList, viewType, num);
    return {
        type: types.VIDEO_LIVE_INIT,
        payload: {
            channelList,
            playList,
            viewType
        }
    }
}
export const changeView = (viewType) => {

}