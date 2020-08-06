import { ADD_ALARM } from "../constants";

const inicialState = {
  alarms: []
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case ADD_ALARM:
      return { ...state};
    default:
      return state;
  }
};
