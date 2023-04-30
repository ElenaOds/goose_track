import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateUser } from './user.operations';

const initialState = {
  user: {},
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, _) => {
        state.isLoading = false;
      }),
});

export const userReducer = userSlice.reducer;
