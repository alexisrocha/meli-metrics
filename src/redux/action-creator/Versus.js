import { ADD_NAME } from "../constants";

const addName = (name) => ({
  type: ADD_NAME,
  name,
});

export const addCountry = (name) => {
  return (dispatch) => {
    dispatch(addName(name));
  };
};
