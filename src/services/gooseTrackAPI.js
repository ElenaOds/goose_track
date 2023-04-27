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

export const getTasks = date =>
  axios.get(`/tasks/?dateFrom=${date.from}&dateTo=${date.to}`); // {from: "2023-04-01", to: "2023-04-30"}

export const createTask = data => axios.post('/tasks/', data); // data = {title, date, start, end, priority}

export const updateTask = data =>
  axios.patch(`/tasks/${data.id}`, data.updatedTask); // {id: 0000, updatedTask: { title: "updatedTitle", ...}}

export const deleteTask = id => axios.delete(`/tasks/${id}`);
