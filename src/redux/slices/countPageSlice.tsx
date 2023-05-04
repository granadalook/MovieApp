import {createSlice} from '@reduxjs/toolkit';
import {InitialStateI} from '../../interface/initalState';

const initialState: InitialStateI = {
  value: 1,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});
export default CounterSlice.reducer;
export const {increment, decrement, reset} = CounterSlice.actions;
