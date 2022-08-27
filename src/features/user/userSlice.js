// const createSlice = require('@reduxjs/toolkit').createSlice;
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
// const axios = require('axios');
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { axios } from 'axios';


// createAsyncThunk generates pending, fulfilled, and rejected action types para o fetchUsers
export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = response.json()
    return data;
  });



// slice
const userSlice = createSlice({

  name: 'user',

  initialState: {
    loading: false,
    users: false,
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
