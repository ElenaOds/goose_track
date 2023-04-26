import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend.onrender.com/api/';

// AUTH endpoints

export const registerUser = data => axios.post('/auth/register', data);

export const loginUser = data => axios.post('/auth/login', data);

// USER endpoints

export const refresh = () => axios.get('/user/current');

export const logoutUser = () => axios.post('/user/logout');

export const updateUserInfo = data => axios.patch('/user/info', data); // name, email, phone, birthday, skype

// TASKS endpoints

export const getTasks = (startDate, endDate) =>
  axios.get(`/tasks/?dateFrom=${startDate}&dateTo=${endDate}`);

export const createTask = data => axios.post('/tasks/', data); // data = {title, date, start, end, priority}

export const updateTask = (id, data) => axios.patch(`/tasks/${id}`, data);

export const deleteTask = id => axios.delete(`/tasks/${id}`);
