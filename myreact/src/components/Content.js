import Counter from './Counter';
import HoverCounter from './HoverCounter';


export default function Content({ theme }) {
  return (
    <div>
      <h1>This is a Section</h1>
      <Counter>
        {(count, incrementCount) => {
          return (
            <Consumer>
              {(value) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
