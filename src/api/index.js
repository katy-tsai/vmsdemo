import axios from './axios.mock';

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