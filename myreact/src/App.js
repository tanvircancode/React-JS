// import ClickCounter from './components/ClickCounter';
// // import HoverCounter from './components/HoverCounter';
// // import User from './components/User';
// import Section from './components/Section';
// import ThemeContext from './contexts/themeContext';
// import Counter from './components/Counter';
import React from 'react';
import Counter from './components/Counter';
export default class App extends React.Component {
//   state = {
//     theme: 'dark',
//     switchTheme: () => {
//       this.setState(({ theme }) => {
//         if (theme === 'dark') {
//           return { theme: 'light' };
//         } else {
//           return { theme: 'dark' };
//         }
//       });
//     },
//   };

    render() {

        return (
          <div className="app">
            <Counter />
          </div>
          //   <div className="app">
          //     <Counter>
          //       {(count, incrementCount) => (
          //         <ClickCounter count={count} incrementCount={incrementCount} />
          //       )}
          //     </Counter>
          //     <ThemeContext.Provider value={this.state}>
          //       <Section />
          //     </ThemeContext.Provider>
          //   </div>
        );
  }
}

