import React from "react";
import { Title } from "./title";
import { View } from "./view";
import { getWeather } from "../../utils/api";
import "./main.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Next Week",
      city: "Vancouver",
      country: "Canada",
    };
  }

  componentDidMount() {
    this.changeWeather();
  }

  changeWeather = () => {
    getWeather(this.state.city, this.state.country).then((newWeather) =>
      this.setState({ weather: newWeather })
    );
  };

  onRandomCity = (city) => {
    this.setState(
      {
        city: city.city,
        country: city.country,
      },
      () => this.changeWeather()
    );
  };

  onViewChange = (view) => {
    this.setState({
      view: view,
    });
  };

  render() {
    return (
      <div className="container">
        <Title
          city={this.state.city}
          country={this.state.country}
          view={this.state.view}
          onRandom={this.onRandomCity}
          onViewChange={this.onViewChange}
        />{" "}
        <View view={this.state.view} weather={this.state.weather} />
      </div>
    );
  }
}
