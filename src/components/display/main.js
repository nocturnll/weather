import React from 'react'
import { Title } from './title'
import { View } from './view'
import { getWeather } from '../../utils/api'
import { convertTimeZone } from '../../utils/date'
import './main.css'

export class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: 'Today',
      city: 'Vancouver',
      country: 'Canada',
    }
  }

  componentDidMount () {
    this.setWeather()
  }

  setWeather = (
    view = 'Today', // default view is Today
    city = { city: 'Vancouver', country: 'Canada' }, // default city & country is Vancouver Canada
  ) => {
    let weather // declare 'weather' which will hold the api call result (raw forecast)
    if (view !== this.state.view && view !== 'Five Day Forecast') {
      // checks if you're just switching views AND that it's not five day forecast
      let localizedWeather = convertTimeZone(this.state.rawForecast, view) // converts the raw forecast to today or tomorrow timezone
      this.setState({
        // only changes the view and localized weather
        view: view,
        weather: localizedWeather,
      })
    } else if (
      // checks if you hit the random button and are changing cities & countries
      city.city !== this.state.city ||
      city.country !== this.state.country
    ) {
      getWeather(city.city, city.country).then(result => {
        // calls the api for a forecast
        weather = result // sets the raw forecast to weather
        let localizedWeather = convertTimeZone(weather, 'Today') // localizes it using the raw forecast we just got
        this.setState({
          // sets the rawforecast with the new api result, the new city and country, and the localized weather
          rawForecast: weather,
          city: city.city,
          country: city.country,
          weather: localizedWeather,
        })
      })
    } else if (view === 'Five Day Forecast') {
      // if it is a 5 day forecast, we only change the view (view.js does the logic for a 5 day forecast using rawforecast)
      this.setState({
        view: view,
      })
    } else {
      // if none of the above are true (ie initial mount)
      getWeather(city.city, city.country).then(result => {
        // calls the api
        weather = result // sets api result to weather variable
        let localizedWeather = convertTimeZone(weather, 'Today') // localizes the result for the today view
        this.setState({
          // sets all the initial states including the view to Today

          rawForecast: weather,
          city: city.city,
          country: city.country,
          weather: localizedWeather,
        })
      })
    }
  }

  onViewChange = view => {
    let city = { city: this.state.city, country: this.state.country }
    this.setWeather(view, city)
  }

  onRandomCity = city => {
    this.setWeather(this.state.view, city)
  }

  render () {
    return (
      <div className='container'>
        <Title
          city={this.state.city}
          country={this.state.country}
          view={this.state.view}
          onRandom={this.onRandomCity}
          onViewChange={this.onViewChange}
        />
        <View
          view={this.state.view}
          weather={this.state.weather}
          rawWeather={this.state.rawForecast}
        />
      </div>
    )
  }
}
