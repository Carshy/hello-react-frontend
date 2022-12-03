/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'greetings',
  initialState: { greeting: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('greetings/getMessage/fulfilled', (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export const getMessage = createAsyncThunk('greetings/getMessage', async () => {
  const response = await fetch('http://localhost:3000/greetings');
  const data = await response.json();
  return data.text;
});

export default messagesSlice.reducer;
