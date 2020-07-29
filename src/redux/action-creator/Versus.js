import { ADD_NAME, DELETE_NAME, CHART_TO_VERSUS } from "../constants";

const addName = (name) => ({
  type: ADD_NAME,
  name,
});

const deleteName = (name) => ({
  type: DELETE_NAME,
  name,
});

const chartToVersus = (list, listFlag) =>({
  type: CHART_TO_VERSUS,
  list,
  listFlag,
})
 
export const addCountry = (name) => {
  return (dispatch) => {
    dispatch(addName(name));
  };
};

export const deleteCountry = (name) => {
  return (dispatch) => {
    dispatch(deleteName(name));
  };
};

export const sendToVersus = (list, listFlag) => {
  return (dispatch) => {
    dispatch(chartToVersus(list, listFlag));
  };
};