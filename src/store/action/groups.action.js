import * as types from '../actionTypes';
import { getChannelsByUser, getGroupByCondition, getUsersByUser } from '../../api';
import { groupsJoinUserChannel } from '../../utils/dataUtils';


export function getGroups(userId, type) {
    return async (dispatch) => {
        const groups = await getGroupByCondition({
            userId, type
        });
        const users = await getUsersByUser(userId);
        const channels = await getChannelsByUser(userId);
        const groupData = groupsJoinUserChannel(groups, users, channels);
        return dispatch(getGroupSuccess(groupData));
    };
}

export function getGroupSuccess(groupData) {
    return {
        type: types.GROUPS_QUERY,
        payload: {
            groupData,
        }
    }
}

export function addGroup(name, userId) {
    return {
        type: types.GROUPS_SETTING_ADD,
        payload: {
            groupName: name,
            userId
        }
    }
}

export function dropGroupData(editGroupData) {
    return {
        type: types.GROUPS_SETTING_DROP,
        payload: {
            groupData: editGroupData
        }
    }

}