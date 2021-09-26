import React from 'react';
import ReactDOM from 'react-dom';

// function Clock({locale}) {
//     return (
//       <h1 className="heading">
//         <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//       </h1>
//     );
// }

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello {this.props.children}{' '}
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD">Test</Clock>,
  document.getElementById('root')
);
