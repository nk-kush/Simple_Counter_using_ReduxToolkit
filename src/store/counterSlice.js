import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByTen: (state) => {
      state.value += 10;
    },
    decreaseByTen : (state) => {
        state.value -= 10;
    },
    increaseByHundred : (state) => {
        state.value += 100;
    },
    decreaseByHundred : (state) => {
        state.value -= 100;
    },
    resetCounter : (state) => {
        state.value = 0;
    }
  },
})

export const { increment, decrement, increaseByTen, decreaseByTen, increaseByHundred,
    decreaseByHundred, resetCounter } = counterSlice.actions

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer