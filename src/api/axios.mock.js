import axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://127.0.0.1:3030'
})
instance.interceptors.request.use(async config => {
    config.headers = {
        // 'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    return config;
},
    error => {
        Promise.reject(error)
    });

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
});
export default instance;

