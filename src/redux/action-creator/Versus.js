import { ADD_NAME, DELETE_NAME, CHART_TO_VERSUS } from "../constants";
import { ListItemText } from "@material-ui/core";

const addName = (name) => ({
  type: ADD_NAME,
  name,
});

const deleteName = (name) => ({
  type: DELETE_NAME,
  name,
});

const chartToVersus = (list, listFlag) => ({
  type: CHART_TO_VERSUS,
  list,
  listFlag,
});

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
  let listVersus = [];
  let diccionario = new Object();
  for (let i = 0; i < list.length; i++) {
    if (!diccionario[list[i].metric_id]) {
      diccionario[list[i].metric_id] = true;
      let copy = list[i];
      let dimensionCopy = list[i];
      for (let j = 0; j < listFlag.length; j++) {
        dimensionCopy.site = listFlag[j];
        copy = { ...list[i], dimension: dimensionCopy };
        listVersus.push(copy);
      }
    }
  }

  return (dispatch) => {
    dispatch(chartToVersus(listVersus, listFlag));
  };
};
