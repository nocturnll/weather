let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const localize = (rawWeather, view) => {
  let i
  const localTimeRaw = new Date(
    Date.now() + rawWeather.city.timezone * 1000,
  ).toUTCString()

  const localTime = localTimeRaw.substr(17, 5)

  const localDate = localTimeRaw.substr(5, 11)

  switch (localTimeRaw.substr(0, 3)) {
    case 'Sun':
      i = 0
      break
    case 'Mon':
      i = 1
      break
    case 'Tue':
      i = 2
      break
    case 'Wed':
      i = 3
      break
    case 'Thu':
      i = 4
      break
    case 'Fri':
      i = 5
      break
    case 'Sat':
      i = 6
      break
  }

  const localDay = days[i]
  if (view !== 'Five Day Forecast') {
    return localTime + ' on ' + localDay + ', ' + localDate + '.'
  } else {
    return fiveDayOfTheWeek(i)
  }
}

export const dayOfTheWeek = day => {
  return days[day.timestamp.getDay()]
}

const fiveDayOfTheWeek = x => {
  return [days[x], days[x + 1], days[x + 2], days[x + 3], days[x + 4]]
}

export const around = day => {
  let time = day.timestamp.getHours()
  if (time < 10) {
    return '0' + time + ':00)'
  } else {
    return time + ':00)'
  }
}

export const localDate = rawWeather => {
  let dates = []
  let dayInSeconds = 86400

  for (let i = 0; i <= dayInSeconds * 4; i += dayInSeconds) {
    let nextDate = new Date(Date.now() + (rawWeather.city.timezone + i) * 1000)
    let dateString = nextDate.toUTCString()
    let substrDate = dateString.substr(5, 11)
    dates.push(substrDate)
  }

  return dates
}
