import axios from './axios.mock';

export const getDevicesInfo = async (userId) => {
    const response = await axios.get(`/api/devices/${userId}`);
    return response;
}