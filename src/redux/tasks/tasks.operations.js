import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from 'services/gooseTrackAPI';

export const create = createAsyncThunk(
  'tasks/create',
  async (task, thunkAPI) => {
    try {
      const { data } = await createTask(task);
      toast.success('New task has been created');
      return data;
    } catch (error) {
      toast.error('Cannot create the task');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const get = createAsyncThunk(
  'tasks/get',
  async (startDate, endDate, thunkAPI) => {
    try {
      const { data } = await getTasks(startDate, endDate);
      toast.success('Success');
      return data;
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const update = createAsyncThunk(
  'tasks/update',
  async (task, thunkAPI) => {
    try {
      const { data } = await updateTask(task);
      toast.success('Task has been updated');
      return data;
    } catch (error) {
      toast.error('Cannot update the task');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteTask(id);
      toast.success('Task has been deleted');
      return data;
    } catch (error) {
      toast.error('Cannot delete the task');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);