import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000);
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
