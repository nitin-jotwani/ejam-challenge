import { SET_SELECTED_CITY, SET_WEATHER_DATA } from "./actionTypes";

export const setSelectedCity = content => ({
  type: SET_SELECTED_CITY,
  payload: content
});

export const setWeatherData = weatherData => ({
  type: SET_WEATHER_DATA,
  payload: weatherData
});
