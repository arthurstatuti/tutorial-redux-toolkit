// const createSlice = require('@reduxjs/toolkit').createSlice;
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
// const axios = require('axios');
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { axios } from 'axios';


// createAsyncThunk generates pending, fulfilled, and rejected action types para o fetchUsers
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json());
});



// slice
const userSlice = createSlice({

  name: 'user',

  initialState: {
    loading: false,
    users: [],
    error: ''
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    });
  }

});



// exports
export const { userReducer } = userSlice.reducer;
export default userSlice.reducer;
