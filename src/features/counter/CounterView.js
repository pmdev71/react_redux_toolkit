import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByValue, increment, reset } from './counterSlice';

const CounterView = () => {
  const { count, count2 } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Count: {count} </h2>
      <h2> Multi By Payload Value: {count2} </h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increaseByValue({ sum: 5, mul: 3 }));
        }}
      >
        IncreaseByPayloadValue
      </button>
    </div>
  );
};

export default CounterView;
