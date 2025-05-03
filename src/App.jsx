import React, { useState, useEffect } from 'react';
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    handlecount();
    handleReset();
  }, []);

  const handlecount =()=>{
    const savedCount = JSON.parse(localStorage.getItem('count'));
    setCount(savedCount);
  }

  const handleReset = ()=>{
    const count = 0;
    setCount(count);
    localStorage.setItem('count',JSON.stringify(count));
  }

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem('count', JSON.stringify(newCount));
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount));
  };

  return (
    <>
      <h1>Counter App</h1>
      <div className="app-container">
        <div className="card">
          <div className="counter-box">
            <button className="btn" onClick={handleDecrement}> - </button>
            <span className="count-display">{count}</span>
            <button className="btn" onClick={handleIncrement}> + </button>
          </div>

            <button className='btn' onClick={handleReset}>RESET</button>

        </div>
      </div>
    </>
  );
};

export default App;
