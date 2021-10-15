import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';
import React from 'react';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';
export default class App extends React.Component {
  state = { theme: 'dark' };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === 'dark') {
        return { theme: 'light' };
      } else {
        return { theme: 'dark' };
      }
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="app">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

