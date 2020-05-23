import React from "react";
import { Title } from "./title";
import { View } from "./view";
import { getWeather } from "../../utils/api";
import { convertTimeZone } from "../../utils/date";
import "./main.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Today",
      city: "Vancouver",
      country: "Canada",
      weather: "",
      rawForecast: { list: [{ dt_txt: "5" }] },
    };
  }

  componentDidMount() {
    this.changeWeather();
  }

  changeWeather = () => {
    getWeather(this.state.city, this.state.country).then((newWeather) =>
      this.setState(
        {
          rawForecast: newWeather,
        },
        () => {
          this.localizeTime();
        }
      )
    );
  };

  localizeTime = () => {
    let forecast = console.log(
      "before localizing time" + this.state.rawForecast.list[0].dt_txt
    );
    let localizedWeather = convertTimeZone(
      this.state.rawForecast,
      this.state.view
    );

    this.setState({
      weather: localizedWeather,
    });
    console.log(
      "after localizing time" + this.state.rawForecast.list[0].dt_txt
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
    if (view !== this.state.view) {
      this.setState(
        {
          view: view,
        },
        () => {
          if (this.state.view !== "Five Day Forecast") {
            this.localizeTime();
          }
        }
      );
    }
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
        <View
          view={this.state.view}
          weather={this.state.weather}
          rawWeather={this.state.rawForecast.list}
        />
      </div>
    );
  }
}
