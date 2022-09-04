export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

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
