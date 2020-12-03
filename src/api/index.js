import axios from './axios.mock';
export const getMaps = async () => {
    const response = await axios.get(`/maps`);
    
    return response;
}
export const getUsersByUser = async (userId) => {
    const response = await axios.get(`/users?userId=${userId}`);
    return response;
}

export const getUsersByCondition = async (args) => {
    const response = await axios.get(`/users`, { params: { ...args } });
    return response;
}

export const insertUsers = async (user) => {
    const response = await axios.post(`/users`, user);
    return response;
}

export const updateUsers = async (user) => {
    const response = await axios.put(`/users/${user.id}`, user);
    return response;
}

export const getChannelsByUser = async (userId) => {
    const response = await axios.get(`/channels?userId=${userId}`);
    return response;
}

export const getDevicesByUser = async (userId) => {
    const response = await axios.get(`/devices?userId=${userId}`);
    return response;
}

export const getGroupsByUser = async (userId) => {
    const response = await axios.get(`/groups?userId=${userId}`);
    return response;
}

export const getGroupByCondition = async (args) => {
    const response = await axios.get(`/groups`, { params: { ...args } });
    return response;
}

export const addMulitpleGroupItems = async (addGroupItems) => {
    const response = await axios.post('/api/groups/multipleAdd', { addGroupItems });
    return response;
}

export const deleteMulitpleGroupItems = async (deleteGroupItems) => {
    const response = await axios.post('/api/groups/multipleDelete', { deleteGroupItems });
    return response;
}

export const deleteGroup = async (group) => {
    if (group.id) {
        const response = await axios.delete(`/api/groups/${group.id}`);
        return response;
    } else {
        return;
    }

}