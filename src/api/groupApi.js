import axios from './axios.mock';

export const getGroupInfo = async (userId) => {
    const response = await axios.get(`/api/groups/${userId}`);
    return response;
}