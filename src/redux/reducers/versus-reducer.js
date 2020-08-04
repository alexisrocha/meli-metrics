import {
  ADD_NAME,
  DELETE_NAME,
  ADD_CHART_TO_VERSUS,
  DELETE_ROW,
} from "../constants";

const initialState = {
  chartVersus: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    /* case ADD_NAME:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.name],
        chartVersus: action.newList,
      }; */
    /*  case DELETE_NAME:
      let selectedCountries2 = state.selectedCountries.filter(
        (elem) => elem != action.name
      ); 
      return {
        ...state,
        selectedCountries: selectedCountries2,
        chartVersus: action.newList,
      };*/

    default:
      return state;
  }
};
