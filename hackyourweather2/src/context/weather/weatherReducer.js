import {
  SEARCH_CITY,
  SET_LOADING,
  SET_ERROR,
  REMOVE_CITY_BY_ID,
  FETCH_DETAILS,
  SET_ALERT
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        fetchData: [action.payload, ...state.fetchData],
        loading: false,
        alert: false
      };
    case FETCH_DETAILS:
      return {
        ...state,
        weatherDetails: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        alert: false
      };
    case REMOVE_CITY_BY_ID:
      return {
        ...state,
        fetchData: state.fetchData.filter(city => city.id !== action.payload)
      };
    case SET_ALERT:
      return {
        ...state,
        alert: true,
        loading: false
      };
    default:
      return state;
  }
};
