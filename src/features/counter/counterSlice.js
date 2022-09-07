const { createSlice } = require('@reduxjs/toolkit');

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    count2: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
      state.count2 = 0;
    },
    increaseByValue: (state, action) => {
      state.count = state.count + action.payload.sum;
      state.count2 = state.count * action.payload.mul;
    },
  },
});

export const { increment, decrement, reset, increaseByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
