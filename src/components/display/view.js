import React from "react";
import { flavourText } from "./flavourText";
import "./view.css";

export class View extends React.Component {
  render() {
    if (!this.props.weather) return <p></p>;

    let day = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (this.props.view === "Today") {
      return (
        <div className="weatherBox">
          <div className="forecast">
            <p className="dayOfTheWeek">{days[day.getDay()]}</p>
            <p className="degrees">
              {this.props.weather[0].main.temp.toFixed(1)} degrees
            </p>
            <p className="weatherType">
              {this.props.weather[0].weather[0].main}
            </p>
            {/* <p className="flavourText">
              {flavourText.get(weather[0].main.temp)}
            </p> */}
          </div>
        </div>
      );
    } else if (this.props.view === "Tomorrow") {
      return (
        <div className="weatherBox">
          <div className="forecast">
            <p className="dayOfTheWeek">{days[day.getDay() + 1]}</p>
            <p className="degrees">
              {this.props.weather[8].main.temp.toFixed(1)}°C
            </p>
            <p className="weatherType">
              {this.props.weather[1].weather[0].main}
            </p>
            {/* <p className="flavourText">
                  {flavourText.get(weather[0].main.temp)}
                </p> */}
          </div>
        </div>
      );
    } else {
      const fiveDayForecast = [0, 1, 2, 3, 4].map(
        (i) => this.props.weather[i * 8]
      );

      const data = fiveDayForecast.map((fiveDay, i) => {
        return (
          <div className="forecast">
            <p className="dayOfTheWeek">{days[day.getDay() + i]}</p>
            <p className="degrees">{fiveDay.main.temp.toFixed(1)}°C</p>
            <p className="weatherType">{fiveDay.weather[0].main}</p>
            {/* <p className="flavourText">{this.props.flavourText}</p> */}
          </div>
        );
      });
      return <div className="weatherBox">{data}</div>;
    }
  }
}
