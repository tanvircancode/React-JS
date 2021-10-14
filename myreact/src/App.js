import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';
import React from 'react';
import Section from './components/Section';

export default class App extends React.Component {
  state = { theme: 'dark' };
  render() {
    const { theme } = this.state;
    return (
      <div className="app">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Provider value={}><Section theme={theme} /> </Provider>
      </div>
    );
  }
}

