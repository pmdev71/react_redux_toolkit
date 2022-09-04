import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '../constants/counterConstant';

const INITIAL_COUNTER_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1,
      };
    case RESET_COUNTER:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;

// 1. state - count : 0
// 2. action - increment, decrement, reset
// 3. reducer - function that takes state and action as arguments and returns a new     state.
//         - incriment -> count => count + 1
//         - decriment -> count => count - 1
//         - reset -> count => 0
// 4. store - globalized state
// 5. Provider - wrap the index.js with Provider
// 6. Use store
//         - useSelector - For access the state value from store.
//         - useDispatch - For dispatch the action to reducer.

// npm i redux -->package for create store
// npm i react-redux -->package for connect react with redux

// npm i redux-thunk -->package for async action
// npm i redux-devtools-extension -->package for redux dev tools
