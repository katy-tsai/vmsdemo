import axios from './axios.mock';

export const getChannelInfo = async (userId) => {
    const response = await axios.get(`/api/channels/${userId}`);
    return response;
}