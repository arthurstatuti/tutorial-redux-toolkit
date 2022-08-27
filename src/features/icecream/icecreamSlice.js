// const createSlice = require('@reduxjs/toolkit').createSlice;
// const { cakeActions } = require('../cake/cakeSlice');
import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const icecreamSlice = createSlice({

  name: 'icecream',

  initialState: {
    numOfIcecreams: 20
  },

  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  },

  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIcecreams--
  //   }
  // }

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--
    });
  }

});

// estraReducers allow createSlice() to respond to other action types besides the types it has generated 

export const { ordered, restocked }  = icecreamSlice.actions;
export default icecreamSlice.reducer;
