import { ADD_NAME, DELETE_NAME } from "../constants";

const initialState = {
  selectedCountries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.name],
      };
    case DELETE_NAME:
      let selectedCountries2 = state.selectedCountries.filter(
        (elem) => elem != action.name
      );
      return {
        ...state,
        selectedCountries: selectedCountries2,
      };

    default:
      return state;
  }
};
