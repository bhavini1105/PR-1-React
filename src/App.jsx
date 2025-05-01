import React, { useState, useEffect } from 'react';
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = JSON.parse(localStorage.getItem('count')) || 0;
    setCount(savedCount);
  }, []);

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
          <h2>🛍️ Stylish sneaker</h2>
          <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="product-image"  />
          <div className="counter-box">
            <button className="btn" onClick={handleDecrement}> - </button>
            <span className="count-display">{count}</span>
            <button className="btn" onClick={handleIncrement}> + </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
