import { createSlice } from '@reduxjs/toolkit';
import {} from './tasks.operations';

const initialState = {
  tasks: [],
  isLoading: false,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  extraReducers: builder => builder.addCase(),
});

export const authReducer = calendarSlice.reducer;
