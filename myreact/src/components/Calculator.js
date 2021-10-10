import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c',
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature , scale} = this.state;
    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in Celsius: </legend>
          <input
            type="text"
            value={temperature}
            onChange={this.onTemperatureChange}
          />
        </fieldset>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
