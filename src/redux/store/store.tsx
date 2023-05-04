import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from '../slices/countPageSlice';
export const ConfigStorage = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
export type AppDispatch = typeof ConfigStorage.dispatch;
export type RootState = ReturnType<typeof ConfigStorage.getState>;
