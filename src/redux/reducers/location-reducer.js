import { SET_LOCATION, CHANGE_TITLE_NAVBAR } from "../constants";

const inicialState = {
  location: null,
  bool: false,
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.url };
    case CHANGE_TITLE_NAVBAR:
      return { ...state, bool: action.bool };
    default:
      return state;
  }
};
