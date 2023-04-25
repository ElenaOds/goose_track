import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser, loginUser, logoutUser } from 'services/todoAPI/authAPI';

export const setAuthHeader = token => {
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
      toast.success('Log in successful');
      return data;
    } catch (error) {
      toast.error('Log in error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logOut', async () => {
  try {
    await logoutUser();
    clearAuthHeader();
    toast.success('Log out successful');
  } catch (error) {
    console.log(error.message);
    toast.error('Log out error');
  }
});
