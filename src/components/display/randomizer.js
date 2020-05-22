import React from "react";
import { getRandomCity } from "../../utils/randomCity";

export class Randomizer extends React.Component {
  getRandomCity = () => {
    this.props.onChange(getRandomCity());
  };

  render() {
    return (
      <div>
        <button onClick={this.getRandomCity}>Go Somewhere Else</button>
      </div>
    );
  }
}
