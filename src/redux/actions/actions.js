import {
  GET_WEATHER_CITY,
  DELETE_WEATHER_CITY,
  UPDATE_WEATHER_CITY,
  GET_COUNTRIES_LIST,
} from "../const";
export const getWeatherCity = (weatherData) => ({
  type: GET_WEATHER_CITY,
  payload: weatherData,
});
export const deleteWeatherCity = (weatherData, index) => ({
  type: DELETE_WEATHER_CITY,
  payload: [...weatherData.slice(0, index), ...weatherData.slice(index + 1)],
});
export const updateWeatherCity = (weatherData) => ({
  type: UPDATE_WEATHER_CITY,
  payload: weatherData,
});
export const getCountries = (countriesData) => ({
  type: GET_COUNTRIES_LIST,
  payload: countriesData,
});
