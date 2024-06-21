import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
import React, {useState, useCallback} from "react";
function App() {
  const[input, setInput] = useState("");
  const[count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count+1),[count]);
  return (
    <div className="App">
      <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment Counter</button>
      <p>Input: {input}</p>
      <p>Counter: {count}</p>

    </div>
  );
}
const ChildComponent = React.memo(function({count, onClick}){
  console.log("Child component is rendered");
  return(
    <div>
      <button onClick={onClick}>Increment Counter</button>
      <p>Counter: {count}</p>
    </div>
  );
})

export default App;
