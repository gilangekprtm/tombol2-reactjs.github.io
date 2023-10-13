import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='kurang' onClick={handleDecrement}>Kurang</button>
      <button className='reset' onClick={handleReset}>Reset</button>
      <button className='tambah' onClick={handleIncrement}>Tambah</button>
    </div>
  );
}

export default App;
