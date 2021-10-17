import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log('ticking');
    setDate(new Date()); //chnage
  };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log('rendered');
    document.title = `clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log('timer');
    const interval = setInterval(tick, 1000);
    return () => {
      console.log('component unmounted');
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>

      <p>
        <button type="button" value={count} onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
