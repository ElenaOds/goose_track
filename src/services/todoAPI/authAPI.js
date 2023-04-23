import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend.onrender.com';

export const registerUser = data => axios.post('/api/auth/register', data);

export const loginUser = data => axios.post('/api/auth/login', data);

export const logoutUser = () => axios.post('/api/user/logout');
