import React from "react";
import { flavourText } from "./flavourText";
import "./view.css";

export class View extends React.Component {
  render() {
    if (!this.props.weather || this.props.weather.forEach((x) => x))
      return <p>Fuck</p>;

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

    if (this.props.view === "Today" || this.props.view === "Tomorrow") {
      const data = this.props.weather.map((day) => {
        return (
          <div className="forecast">
            <p className="dayOfTheWeek">
              {days[day.timestamp.getDay()]}
              <br />
              <span className="timeOfDay">
                {day.description} <br />
                <span id="around">
                  (around {day.timestamp.getHours() % 12 || 12})
                </span>
              </span>
            </p>
            <p className="degrees">{day.weather.toFixed(1)}°C</p>
            <p className="weatherType">{day.type}</p>
            {/* <p className="flavourText">
              {flavourText.get(weather[0].main.temp)}
            </p> */}
          </div>
        );
      });
      return <div className="weatherBox">{data}</div>;
    } else {
      const fiveDayForecast = [0, 1, 2, 3, 4].map(
        (i) => this.props.rawWeather[i * 8]
      );

      let day = new Date();

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
