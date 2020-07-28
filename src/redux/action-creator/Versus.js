import { ADD_NAME, DELETE_NAME } from "../constants";

const addName = (name) => ({
  type: ADD_NAME,
  name,
});

export const addCountry = (name) => {
  return (dispatch) => {
    dispatch(addName(name));
  };
};

const deleteName = (name) => ({
  type: DELETE_NAME,
  name,
});

export const deleteCountry = (name) => {
  return (dispatch) => {
    dispatch(deleteName(name));
  };
};
