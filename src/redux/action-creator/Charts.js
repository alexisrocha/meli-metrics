import {
  GET_CHART,
  DELETE_CHART,
  SELECTED_CHART,
  SET_SELECTEDCHART,
  ADD_METRIC,
  DELETE_METRIC,
  COPY_CHART
} from "../constants";
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
  "Buy Box": `61fbd212-8159-47f7-9083-7167d289a444`,
  "Devices Sold": `5c6d43d3-89b4-47b8-b5b2-152152e3f391`,
  "CBT - ASP(e) Billable": "bbac3e4d-6e02-474e-aef0-82a049ea8dd7",
  "Avg Shipping Time": "50cdf8d6-2419-4bd9-8d1d-84463bcf0607",
  "New Buyers": "4c242570-12ec-44a5-ae5f-62ddee3b76ee",
  "ASP per Shippment": "a0d606f3-e11b-4743-aeb6-b4761beadb84",
  "Unique Receivers": "2891d615-9637-4f48-b44f-dd473248a70c",
  "Share GMV Buy Box": "a911c61a-e19f-4011-bc76-3762f0f9cced",
};

let metricUrl = {
  "Buy Box": "930ee191-8d1e-43b8-b7a7-0213a31eadb9",
  "Devices Sold": "f0c1db20-2b03-4f07-80f8-d4b22e5e0257",
  "CBT - ASP(e) Billable": "d720e0d3-f70e-41e9-9abe-58285e395fed",
  "Avg Shipping Time": "ce8ec606-5383-4169-a423-a2e5620c63c7",
  "New Buyers": "60b3c552-d717-4330-a3be-dab187eb6f51",
  "ASP per Shippment": "32cc928e-156c-4401-9463-355833f7a4af",
  "Unique Receivers": "a697f11b-4019-4cc9-a4ee-40966f35cc64",
  "Share GMV Buy Box": "373bf76d-4695-403a-9671-a519b3151923",
};

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

const deleteMetric = (id) => ({
  type: DELETE_METRIC,
  id,
});

const copyChart = (id) => ({
  type: COPY_CHART,
  id,
});

const setSelectedChart = (selectedChart) => ({
  type: SET_SELECTEDCHART,
  selectedChart,
});

const addMetric = (metric) => ({
  type: ADD_METRIC,
  metric,
});

export const fetchChart = (id , title) => {
  return (dispatch) =>
    axios
      .get(host + url[id])
      .then((res) => res.data)
      .then((chart)=> {
        chart.title = title
        return chart
      })
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

export const changeChart = (selectChart) => {
  return (dispatch) => {
    dispatch(setSelectedChart(selectChart));
  };
};

export const removeMetric = (id) => {
  return (dispatch) => {
    dispatch(deleteMetric(id));
  };
};

export const copyList = (id) => {
  return (dispatch) => {
    dispatch(copyChart(id));
  };
};

export const addMetricToChart = (id) => {
  console.log("ACA ESTA EL ADDMETRIC", id, host + metricUrl[id]);
  return (dispatch) =>
    axios
      .get(host + metricUrl[id])
      .then((res) => res.data)
      .then((metric) => dispatch(addMetric(metric)));
};
