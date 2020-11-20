const apiKey = process.env.REACT_APP_API_KEY;
const units = "metric";

// sample API call
// https://api.openweathermap.org/data/2.5/forecast?q=Vancouver,Canada&appid=ec362ff2f036929f0acb8d6cc8ca8f19&units=metric

export const getWeather = (city, country) => {
  const apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=${units}`;
  return fetch(apiCall)
    .then((response) => response.json())
    .then((weather) => weather);
};
