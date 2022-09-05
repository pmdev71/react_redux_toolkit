import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/post/PostView';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit Counter app</h1>
      <CounterView />
      <h2>
        ------------------------------------------------------------------------------------------
      </h2>
      <PostView />
    </div>
  );
}

export default App;
