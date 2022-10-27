import './App.css';
import {useState} from 'react'

function App() {

const [count, setCount] = useState<number>(0)

  return (
    <div>
      <button onClick={() => count > 0 ? setCount(count - 1) : setCount(count)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
