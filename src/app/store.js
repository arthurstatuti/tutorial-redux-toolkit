// With redux-toolkit, the reccommendation is to group together the reducer logic and actions for a single feature in a single file. The file should conatain the word "Slice" as a suffix.

// The entire application state is split into slices and managed individually. 

// const configureStore = require('@reduxjs/toolkit').configureStore;
// const cakeReducer = require('../features/cake/cakeSlice');
// const icecreamReducer = require('../features/icecream/icecreamSlice');
// const userReducer = require('../features/user/userSlice');

// const logger = reduxLogger.createLogger();
// const reduxLogger = require('redux-logger');

import { configureStore } from '@reduxjs/toolkit';
import { cakeReducer } from '../features/cake/cakeSlice';
import { icecreamReducer } from '../features/icecream/icecreamSlice';
import { userReducer } from '../features/user/userSlice';

const store = configureStore({

  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

});

// module.exports = store;
export default store;
