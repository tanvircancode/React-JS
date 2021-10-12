import React from 'react';

export default class ClickCounter extends React.Component {
  state = { count: 0 };
    render() {
        const { count } = this.state;
    return (
      <div>
        <button type="input">Clicked X times</button>
      </div>
    );
  }
}
