import * as types from '../actionTypes';
import { uuid } from '../../utils/dataUtils';
const initState = {
    groupData: [],
    groups: []

};



const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GROUPS_QUERY: {
            return { ...state, ...action.payload };
        }
        case types.GROUPS_SETTING_ADD: {
            const initGroups = {
                groupId: uuid(),
                groupName: action.payload.groupName,
                userId: action.payload.userId,
                accounts: [],
                channels: []
            }
            const newGroupData = [...state.groupData, initGroups];
            return { ...state, groupData: newGroupData };
        }
        case types.GROUPS_SETTING_DROP: {
            return { ...state, ...action.payload };
        }
        case types.GROUPS_SETTING_REMOVE: {
            return { ...state, ...action.payload };
        }
        case types.GROUPS_SETTING_DELETE_GROUP: {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
};

export default reducer;