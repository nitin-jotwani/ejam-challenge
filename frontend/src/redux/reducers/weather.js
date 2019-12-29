import { SET_SELECTED_CITY, SET_WEATHER_DATA } from "../actionTypes";

const initialState = {
  selectedCity: null,
  cities: [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Dummy' }
  ],
  weatherData: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_CITY: {
      const { cityName } = action.payload;
      return {
        ...state,
        selectedCity: cityName
      };
    }
    case SET_WEATHER_DATA: {
      const { data } = action.payload;
      return {
        ...state,
        weatherData: data
      }
    }
    default:
      return state;
  }
}
