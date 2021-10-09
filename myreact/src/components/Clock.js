import React from 'react';
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

        const { date, locale } = this.state;
        let button;
        if (locale === 'bn-BD') {
            button = (
                <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
            );
        }
        else {
            button = (
              <Button change={this.handleClick} locale="bn-BD" show enable />
            );
        }

    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>

        {button}

      </div>
    );
  }
}

// ReactDOM.render(
//   <Clock locale="bn-BD"></Clock>,
//   document.getElementById('root')
// );

export default Clock;
