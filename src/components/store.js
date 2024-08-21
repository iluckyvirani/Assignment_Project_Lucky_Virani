import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducer.js';

const store = configureStore({
  reducer: dashboardReducer,
});

export default store;
