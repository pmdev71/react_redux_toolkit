import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Redux Counter App</h1>
      <Counter />
      <h2>--------------------------------------------------------</h2>
      <div>
        <h4>1. state - count : 0 </h4>

        <h4>2. action - increment, decrement, reset </h4>

        <h4>
          3. reducer - function that takes state and action as arguments and
          returns a new state.{' '}
        </h4>
        <h4>- incriment -> count => count + 1 </h4>
        <h4>- decriment -> count => count - 1 </h4>
        <h4>- reset -> count => 0 </h4>

        <h4>4. store - globalized state </h4>
        <h4>5. Provider - wrap the index.js with Provider </h4>
        <h4>6. Use store</h4>
        <h4>- useSelector - For access the state value from store. </h4>
        <h4>-useDispatch - For dispatch the action to reducer. </h4>

        <h4>npm i redux</h4>
        <h4>-package for create store </h4>

        <h4>npm i react-redux </h4>
        <h4>-package for connect react with redux </h4>

        <h4>npm i redux-thunk</h4>
        <h4>-package for async action </h4>

        <h4>npm i redux-devtools-extension </h4>
        <h4>-package for redux dev tools</h4>
      </div>
    </div>
  );
}

export default App;
