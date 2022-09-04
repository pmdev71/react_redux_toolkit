import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to fetch data App</h1>
      <Todos />
      <h2>--------------------------------------------------------</h2>
    </div>
  );
}

export default App;

// 1. install packages
//    -npm i redux react-redux redux-thunk axios
// 2. constant define
// 3. async action creator
// 4. reducer
// 5. create store
// 6. provide store index.js
// 7. useSelector for access the state value from store.
// 8. useDispatch for dispatch the action to reducer & update state.
