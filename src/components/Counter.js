import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../services/actions/counterAction';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncriment = () => {
    dispatch(incrementCounter());
  };

  const handleDecriment = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h2>Count : {count}</h2>
      <button onClick={handleIncriment}>Increment</button>
      <button onClick={handleDecriment}>Decrement</button>
      <button onClick={handleReset}>Rerset</button>
    </div>
  );
};

export default Counter;

// 1. state - count : 0
// 2. action - increment, decrement, reset
// 3. reducer - function that takes state and action as arguments and returns a new     state.
//         - incriment -> count => count + 1
//         - decriment -> count => count - 1
//         - reset -> count => 0
// 4. store - globalized state
