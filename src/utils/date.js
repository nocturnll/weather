var _ = require("lodash");
// takes in a forecast object and timezone with the purpose of converting the timestamps within the forecast to local time based on region
export const convertTimeZone = (forecast, view) => {
  let cloneForecast = _.cloneDeep(forecast);
  // for each day of the forecast, create an array of the timestamps for each weather forecast
  const UTCTimes = cloneForecast.list.map((x) => x.dt_txt);
  // convert the timestamp to region's local time by adding the difference in timezone in seconds
  const localTimes = UTCTimes.map((x) => {
    let timestamp = new Date(x);
    timestamp.setSeconds(timestamp.getSeconds() + cloneForecast.city.timezone);
    return timestamp;
  });
  // returns a copy of the forecast where all the times are converted to the region's local time
  let newForecast = _.cloneDeep(forecast);
  for (let i = 0; i < localTimes.length; i++) {
    newForecast.list[i].dt_txt = localTimes[i];
  }
  // calls the function to reduce the long (40~) array of every forecast to just the ones we need based on the view. only the list of forecasts from the forecast object, not the entire object
  return reduceToThisDay(newForecast.list, view);
};

// takes in the object where each forecast has a localized timestamp and the current view (either today or tomorrow), with the purpose of reducing the array to just the forecasts we need for this view
const reduceToThisDay = (newForecast, view) => {
  if (view === "Today") {
    // only pushes the first 24 hours worth of forecasts (in case the forecast is on a 6hr basis instead of 3hrs as usual)
    // the data will always have the same set of hours (eg 12, 3, 6, etc) so checking if the hour is the same will make it stop at the next day
    let i = 1;
    const weatherAndTime = [
      // populates the array with the first index so we can skip over it and go straight to the comparison
      {
        weather: newForecast[0].main.temp,
        timestamp: newForecast[0].dt_txt,
        type: newForecast[0].weather[0].main,
      },
    ];
    while (
      newForecast[0].dt_txt.getHours() != newForecast[i].dt_txt.getHours()
    ) {
      // pushes only the temperature in degrees and the timestamp as an object to a new array
      weatherAndTime.push({
        weather: newForecast[i].main.temp,
        timestamp: newForecast[i].dt_txt,
        type: newForecast[i].weather[0].main,
      });
      i++;
    }
    // returns an array of objects with the weather and associated local timestamp, but just the ones we need, and passes it to the last function which will give each forecast a time of day description
    return describeTimeOfDay(weatherAndTime);
  }

  if (view === "Tomorrow") {
    let i = 1;
    let x = 2;
    let today = newForecast[0].dt_txt.getHours();
    while (newForecast[i].dt_txt.getHours() != today) {
      i++;
      x++;
    }
    const weatherAndTime = [
      {
        weather: newForecast[i].main.temp,
        timestamp: newForecast[i].dt_txt,
        type: newForecast[i].weather[0].main,
      },
    ];

    while (today != newForecast[x].dt_txt.getHours()) {
      weatherAndTime.push({
        weather: newForecast[x].main.temp,
        timestamp: newForecast[x].dt_txt,
        type: newForecast[x].weather[0].main,
      });
      x++;
    }
    return describeTimeOfDay(weatherAndTime);
  }
};

// describes each timestamp by time of day and returns an array containing each forecast's timestamp, weather, and time description
const describeTimeOfDay = (weatherAndTime) => {
  let finalForecast = []; // creates a new array
  for (let i = 0; i < weatherAndTime.length; i++) {
    let time = weatherAndTime[i].timestamp.getHours();
    if (time > 0 && time <= 5) {
      if (
        // if finalForecast does not exist, or if it does exists and doesn't already contain a forecast with this description
        // why: we only want to have the first early morning forecast, first morning, first noon, etc.
        !finalForecast ||
        finalForecast.every((d) => d.description != "Early Morning")
      ) {
        finalForecast.push(weatherAndTime[i]);
        finalForecast[finalForecast.length - 1].description = "Early Morning";
      }
    } else if (time > 5 && time <= 10) {
      if (
        !finalForecast ||
        finalForecast.every((d) => d.description != "Morning")
      ) {
        finalForecast.push(weatherAndTime[i]);
        finalForecast[finalForecast.length - 1].description = "Morning";
      }
    } else if (time > 10 && time <= 14) {
      if (
        !finalForecast ||
        finalForecast.every((d) => d.description != "Noon")
      ) {
        finalForecast.push(weatherAndTime[i]);
        finalForecast[finalForecast.length - 1].description = "Noon";
      }
    } else if (time > 14 && time <= 19) {
      if (
        !finalForecast ||
        finalForecast.every((d) => d.description != "Afternoon")
      ) {
        finalForecast.push(weatherAndTime[i]);
        finalForecast[finalForecast.length - 1].description = "Afternoon";
      }
    } else if (time > 19 || time === 0) {
      if (
        !finalForecast ||
        finalForecast.every((d) => d.description != "Evening")
      ) {
        finalForecast.push(weatherAndTime[i]);
        finalForecast[finalForecast.length - 1].description = "Evening";
      }
    }
  }
  // returns an array containing five objects, one for each time of day, each with the forecast itself and the localized timestamp
  return finalForecast;
};

/* expected output

Array = [
{
description:
Morning
timestamp: date
weather:
28.78
}
{
description:
Noon
timestamp: date
weather:
28.82
}
{
description:
Afternoon
timestamp: date
weather:
28.6
}
{
description:
Evening
timestamp: date
weather:
28.46
}
{
description:
Early Morning
timestamp: date
weather:
28.05
}
]

*/
