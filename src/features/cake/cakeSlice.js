// const createSlice = require('@reduxjs/toolkit').createSlice;
import { createSlice } from '@reduxjs/toolkit';

const cakeSlice = createSlice({

  name: 'cake',

  initialState: {
    numOfCakes: 10
  },

  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }

});

// createSlice() will automatically generate action creators (+ actions) with the same names of the reducer functions we have written. We don't have to type them by hand.   

export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;
