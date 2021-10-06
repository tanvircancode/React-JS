import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);
  //       this.state = { date: new Date(), locale: 'bn-BD' };
  //       this.handleClick = this.handleClick.bind(this);
  //     }

  state = { date: new Date(), locale: 'bn-BD' };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

    render() {
              console.log('Clock component rendered');
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        <Button change={this.handleClick} locale="en-US">
          click here
        </Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD"></Clock>,
  document.getElementById('root')
);

export default Clock;
