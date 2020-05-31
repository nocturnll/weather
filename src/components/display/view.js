import React from 'react'

import './view.css'
import {
  localize,
  dayOfTheWeek,
  around,
  localDate,
} from '../../utils/dayDisplay'
import { describe } from '../../utils/weatherDescription'

export class View extends React.Component {
  render () {
    if (!this.props.weather || !this.props.rawWeather) return <p></p>

    if (this.props.view === 'Today' || this.props.view === 'Tomorrow') {
      const data = this.props.weather.map(day => {
        return (
          <div className='forecast'>
            <p className='dayOfTheWeek'>
              {dayOfTheWeek(day)}
              <br />
              <span className='timeOfDay'>
                {day.description} <br />
                <span id='around'>(around {around(day)}</span>
              </span>
            </p>
            <p className='degrees'>{day.weather.toFixed(1)}°C</p>
            <span className='weatherType'>{day.type}</span>
            <p className='weatherDescription'>{describe(day.type)}</p>
            {/* <p className="flavourText">
              {flavourText.get(weather[0].main.temp)}
            </p> */}
          </div>
        )
      })
      return (
        <>
          <p className='localTime'>
            The local time here is {localize(this.props.rawWeather)}
          </p>
          <div className='weatherBox'>{data}</div>
        </>
      )
    } else {
      const fiveDayForecast = [0, 1, 2, 3, 4].map(
        i => this.props.rawWeather.list[i * 8],
      )
      const data = fiveDayForecast.map((fiveDay, i) => {
        return (
          <div className='forecast'>
            <p className='dayOfTheWeek'>
              {localize(this.props.rawWeather, this.props.view)[i]}
              <br />
              <span className='timeOfDay'>
                {localDate(this.props.rawWeather)[i]}
              </span>
            </p>
            <p className='degrees'>{fiveDay.main.temp.toFixed(1)}°C</p>
            <span className='weatherType'>{fiveDay.weather[0].main}</span>
            <p className='weatherDescription'>
              {describe(fiveDay.weather[0].main)}
            </p>
            {/* <p className="flavourText">{this.props.flavourText}</p> */}
          </div>
        )
      })
      return (
        <>
          <p className='localTime'>
            The local time here is {localize(this.props.rawWeather)}
          </p>
          <div className='weatherBox'>{data}</div>
        </>
      )
    }
  }
}
