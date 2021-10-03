import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
      this.state = { date: new Date(), locale: 'bn-BD' };
      this.handleClick = this.handleClick.bind(this);
    }

    // state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
       this.clockTimer = setInterval(() =>  this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick()  {
        this.setState({
          locale: 'en-US',
        })
    }

    tick() {
        this.setState({
          date: new Date(),
        });
    }

    render() {
        const { date,locale } = this.state;
      return (
        <div>
          <h1 className="heading">
            <span className="text">
              {date.toLocaleTimeString(locale)}
            </span>
          </h1>
          <button type="button" onClick={this.handleClick}>
            Click here
          </button>
        </div>
      );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD">Test</Clock>,
  document.getElementById('root')
);

export default Clock;
