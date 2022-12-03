/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: { greeting: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('messages/getMessage/fulfilled', (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export const getMessage = createAsyncThunk('messages/getMessage', async () => {
  const response = await fetch('http://localhost:3000/messages');
  const data = await response.json();
  return data.text;
});

export default messagesSlice.reducer;
