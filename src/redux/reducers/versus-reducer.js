import { ADD_NAME } from "../constants";

const initialState = {
  selectedCountries: ["MLA", "MLB"],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.name],
      };
    default:
      return state;
  }
};
