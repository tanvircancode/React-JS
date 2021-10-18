import React from 'react';
import Title from './components/Title';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import { useState } from 'react';

// import MyComponentClass from './components/MyComponent';
export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = () => {
    setCount1((prevCount) => prevCount + 1);
  };

    const incrementByFive = () => {
        setCount2((prevCount) => prevCount + 5);
    }
  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </div>
  );
}
