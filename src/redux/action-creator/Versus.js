import { ADD_NAME, DELETE_NAME, CHART_TO_VERSUS, ADD_CHART_TO_VERSUS } from "../constants";
import { ListItemText } from "@material-ui/core";
import axios from "axios"

let host = "https://run.mocky.io/v3/";

let metricUrl = {
  "Buy Box - GMV": "930ee191-8d1e-43b8-b7a7-0213a31eadb9",
  "CBT - ASP(e) Billable": "d720e0d3-f70e-41e9-9abe-58285e395fed",
  "Avg Shipping Time": "ce8ec606-5383-4169-a423-a2e5620c63c7",
  "Devices Sold": "f0c1db20-2b03-4f07-80f8-d4b22e5e0257",
  "New Buyers": "60b3c552-d717-4330-a3be-dab187eb6f51",
  "ASP per Shippment": "39a9cccd-2ff2-4738-adb5-cd0b3ec68356",
  "Unique Receivers": "a697f11b-4019-4cc9-a4ee-40966f35cc64",
  "Share GMV Buy Box": "373bf76d-4695-403a-9671-a519b3151923",
};

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

const addChartToVersus = (metric)=> ({
  type: ADD_CHART_TO_VERSUS,
  metric
})

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

export const addToVersus = (id) => {
  return (dispatch) =>
  axios
    .get(host + metricUrl[id])
    .then((res) => res.data)
    .then((metric) => dispatch(addChartToVersus(metric)));
}