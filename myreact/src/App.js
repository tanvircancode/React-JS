import React from 'react';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

// import MyComponentClass from './components/MyComponent';
export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div>{show && <MyComponent />} </div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'hide post' : 'show post'}
        </button>
      </p>
    </div>
  );
}
