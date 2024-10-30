import { configureStore } from '@reduxjs/toolkit';
import app from '@modules/app/app.slice';
import config from '@utils/config';
import { apiSlice } from './api';

const store = configureStore({
  reducer: {
    app,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Add the api middleware to the existing default middleware
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: config.ENV === 'dev',
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
