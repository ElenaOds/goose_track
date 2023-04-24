import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser, loginUser, logoutUser } from 'services/todoAPI/authAPI';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await registerUser(credentials);
      setAuthHeader(data.token);
      toast.success('Registration successful');
      return data;
    } catch (error) {
      toast.error('Registration error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await loginUser(credentials);
      setAuthHeader(data.token);
      toast.success('Successfully logged in');
      return data;
    } catch (error) {
      toast.error('Log in attempt error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logOut', async () => {
  try {
    await logoutUser();
    clearAuthHeader();
    toast.success('Successfully logged out');
  } catch (error) {
    console.log(error.message);
  }
});