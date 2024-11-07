import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const onClickDecrease = () => {
    if (count > -50) {
      setCount(prev => prev - 1);
    }
  }

  const onClickReset = () => {
    setCount(0);
  }

  const onClickIncrease = () => {
    if (count < 50) {
      setCount(prev => prev + 1);
    }
  }

  const textColor = count < 0 ? 'rgb(216, 40, 40)' : count > 0 ? 'rgb(31, 176, 31)' : 'rgb(152, 146, 146)';

  return (
    <div className="App">
      <div className="container">
        <h1>Counter</h1>
        <p style={{color: textColor}}>{count}</p>
        <div className="buttons">
          <button onClick={onClickDecrease} className="btn-decr">Decrease</button>
          <button onClick={onClickReset} className="btn-res">Reset</button>
          <button onClick={onClickIncrease} className="btn-incr">Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
