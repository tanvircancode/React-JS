import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//     }

    state = { date: new Date() };
    
    componentDidMount() {
       this.clockTimer = setInterval(() =>  this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
          date: new Date(),
        });
    }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD">Test</Clock>,
  document.getElementById('root')
);

export default Clock;
