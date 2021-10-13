import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';

function App() {
  return (
    <div className="app">
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
