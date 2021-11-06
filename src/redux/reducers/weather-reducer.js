import {
  GET_WEATHER_CITY,
  DELETE_WEATHER_CITY,
  UPDATE_WEATHER_CITY,
  GET_COUNTRIES_LIST,
} from "../const";
const initialState = {
  weather: [],
  countries: [],
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_CITY:
      if (state.weather.find((item) => item.id === payload.id)) {
        return state;
      } else {
        return {
          ...state,
          weather: [...state.weather, payload],
        };
      }

    case DELETE_WEATHER_CITY:
      return {
        ...state,
        weather: payload,
      };
    case UPDATE_WEATHER_CITY:
      return {
        ...state,
        weather: payload,
      };
    case GET_COUNTRIES_LIST:
      return {
        ...state,
        countries: payload,
      };

    default:
      return state;
  }
};
