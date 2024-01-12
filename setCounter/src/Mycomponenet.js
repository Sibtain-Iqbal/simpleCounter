

import React, { useState } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(()=>{counter + 1});
    setCounter(()=>{counter + 1});
};

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
};

export default MyComponent;
