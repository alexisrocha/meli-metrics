import { ADD_NAME, DELETE_NAME, CHART_TO_VERSUS } from "../constants";
import { ListItemText } from "@material-ui/core";

const addName = (name, newList) => ({
  type: ADD_NAME,
  name,
  newList,
});

const deleteName = (name, newList) => ({
  type: DELETE_NAME,
  name,
  newList,
});

const chartToVersus = (list, listFlag) => ({
  type: CHART_TO_VERSUS,
  list,
  listFlag,
});

export const addCountry = (name, list) => {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push({ ...list[i] });
    if (
      (list[i + 1] && list[i + 1].metric_id != list[i].metric_id) ||
      list[i + 1] == undefined
    ) {
      let copy = { ...list[i], site: name };
      newList.push(copy);
    }
  }

  return (dispatch) => {
    dispatch(addName(name, newList));
  };
};

export const deleteCountry = (name, list) => {
  let newList = [];
  newList = list.filter((x) => x.site != name);
  return (dispatch) => {
    dispatch(deleteName(name, newList));
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
