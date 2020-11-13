import * as types from '../actionTypes';
import { getChannelsByUser, getGroupByCondition, getUsersByCondition, addMulitpleGroupItems, deleteMulitpleGroupItems, deleteGroup } from '../../api';
import { groupsJoinUserChannel, groupAddItems, removeGroups } from '../../utils/dataUtils';

export function addGroupsSetting(userId, groupData) {

}

export function getGroups(userId, type) {
    return async (dispatch) => {
        const groups = await getGroupByCondition({
            userId, type
        });
        const users = await getUsersByCondition({
            mainUser: userId
        });
        const channels = await getChannelsByUser(userId);
        const groupData = groupsJoinUserChannel(groups, users, channels);
        return dispatch(getGroupSuccess(groupData, groups));
    };
}

export function getGroupSuccess(groupData, groups) {
    return {
        type: types.GROUPS_QUERY,
        payload: {
            groupData,
            groups
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

export function dropGroupData(groupIndex, item, type) {
    return async (dispatch, getState) => {
        const state = getState();
        const { groupData } = state.groups;
        let editGroupData = { ...groupData[groupIndex], [type]: [...groupData[groupIndex][type], item] }
        let addGroupItems = groupAddItems(item, type, editGroupData);
        const groups = await addMulitpleGroupItems(addGroupItems);
        groupData[groupIndex] = editGroupData;
        return dispatch(dropGroupDataSuccess(groupData, groups));
    };

}

export function dropGroupDataSuccess(groupData, groups) {
    return {
        type: types.GROUPS_SETTING_DROP,
        payload: {
            groupData,
            groups
        }
    }
}

export function removeGroupItem(groupId, id, type) {
    return async (dispatch, getState) => {
        const state = getState();
        const { groupData, groups } = state.groups;
        const groupIndex = groupData.findIndex((item) => item.groupId === groupId);
        const editGroup = groupData[groupIndex];
        let idLable = type === 'accounts' ? 'userId' : 'channelId';
        const removeIndex = editGroup[type].findIndex((item) => item[idLable] === id);
        if (removeIndex !== -1) {
            editGroup[type].splice(removeIndex, 1);
        }
        groupData[groupIndex] = editGroup;
        const removeItems = removeGroups(groups, groupId, id, type);
        console.log(removeItems);
        const new_groups = await deleteMulitpleGroupItems(removeItems);
        return dispatch(removeGroupItemSuccess(groupData, new_groups));
    };
}

export function removeGroupItemSuccess(groupData, groups) {
    return {
        type: types.GROUPS_SETTING_REMOVE,
        payload: {
            groupData,
            groups
        }
    }
}

export function deletGroup(group) {
    return async (dispatch, getState) => {
        const state = getState();
        const { groupData, groups } = state.groups;
        const deleteIndex = groups.findIndex(g => g.groupId === group.groupId);
        await deleteGroup(groups[deleteIndex]);
        if (deleteIndex !== -1) {
            groups.splice(deleteIndex, 1);
            groupData.splice(groupData.findIndex(g => g.groupId === group.groupId), 1);
        }
        return dispatch(deleteGroupSuccess(groupData, groups));
    };
}

export function deleteGroupSuccess(groupData, groups) {
    return {
        type: types.GROUPS_SETTING_DELETE_GROUP,
        payload: {
            groupData,
            groups
        }
    }
}