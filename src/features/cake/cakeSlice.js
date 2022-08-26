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

// exportando cake reducers (vão pra app/store.js)
// module.exports = cakeSlice.reducer;
export const { cakeReducer } = cakeSlice.reducer;
// exportando cake actions (vão pro index.js)
// module.exports.cakeActions = cakeSlice.actions;
export const { ordered, restocked } = cakeSlice.actions;
