import {
  GET_CHART,
  DELETE_CHART,
  SELECTED_CHART,
  SET_TITLE,
  ADD_METRIC,
} from "../constants";
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
  "Buy Box": `61fbd212-8159-47f7-9083-7167d289a444`,
  "Devices Sold": `5c6d43d3-89b4-47b8-b5b2-152152e3f391`,
  "Share GMV Buy Box": "a911c61a-e19f-4011-bc76-3762f0f9cced"
};

let metricUrl = {
  "Buy Box": "930ee191-8d1e-43b8-b7a7-0213a31eadb9",
}

const getChart = (charts) => ({
  type: GET_CHART,
  charts,
});

const selectChart = (selectedChart) => ({
  type: SELECTED_CHART,
  selectedChart,
});

const deleteChart = (id) => ({
  type: DELETE_CHART,
  id,
});

const setTitle = (title) => ({
  type: SET_TITLE,
  title,
});

const addMetric = (metric) => ({
  type: ADD_METRIC,
  metric,
});

export const fetchChart = (id) => {
  return (dispatch) =>
    axios
      .get(host + url[id])
      .then((res) => res.data)
      .then((charts) => dispatch(getChart(charts)));
};

export const chartSelect = (chart) => {
  return (dispatch) => {
    dispatch(selectChart(chart));
  };
};

export const deleteCharts = (id) => {
  return (dispatch) => {
    dispatch(deleteChart(id));
  };
};

export const changeChart = (title) => {
  return (dispatch) => {
    dispatch(setTitle(title));
  };
};

export const addMetricToChart = (id) => {
  return (dispatch) =>
    axios
      .get(host + metricUrl[id])
      .then((res) => res.data)
      .then((metric) => dispatch(addMetric(metric)));
};