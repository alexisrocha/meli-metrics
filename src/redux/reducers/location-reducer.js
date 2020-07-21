import { SET_LOCATION } from "../constants";

const inicialState = {
  location: null,
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.url };
    default:
      return state;
  }
};
