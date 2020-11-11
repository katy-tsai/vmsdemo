import * as types from '../actionTypes';
import { getChannelsByUser, getGroupsByUser, getUsersByUser } from '../../api';
import { groupsJoinUserChannel } from '../../utils/dataUtils';


export function getGroups(userId) {
    return async (dispatch) => {
        const groups = await getGroupsByUser(userId);
        const users = await getUsersByUser(userId);
        const channels = await getChannelsByUser(userId);
        const groupList = groupsJoinUserChannel(groups, users, channels);
        return dispatch(getGroupSuccess(groupList));
    };
}

export function getGroupSuccess(groupList) {
    return {
        type: types.GROUPS_QUERY,
        payload: {
            groupList,
        }
    }
}