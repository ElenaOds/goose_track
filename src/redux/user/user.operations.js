import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refresh, updateUserInfo } from 'services/gooseTrackAPI';

export const getUser = createAsyncThunk('user/get', async thunkAPI => {
  try {
    const { data } = await refresh();
    return data;
  } catch (error) {
    toast.error('Cannot get user info');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/update',
  async (updatedUser, thunkAPI) => {
    try {
      const { data } = await updateUserInfo(updatedUser);
      toast.success('Successfully updated');
      return data;
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
