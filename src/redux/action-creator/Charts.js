import {
  GET_CHART,
  DELETE_CHART,
  SELECTED_CHART,
  SET_SELECTEDCHART,
  ADD_METRIC,
  DELETE_METRIC,
  COPY_CHART,
  CHANGE_NAME,
  CHANGE_METRIC_INFO,
  CHANGE_VISUALIZATION,
  CHART_TO_VERSUS,
  DELETE_ROW,
  ADD_NAME,
  DELETE_NAME,
  ADD_CHART_TO_VERSUS,
  SET_SHADOW_TO_VERSUS,
} from "../constants";
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
  "Buy Box - GMV": `5ceb55d7-2f8b-44ee-818c-28c7fe46d36c`,
  "CBT - ASP(e) Billable": "ba806367-158d-4d3a-b9d3-c0c5d994544a",
  "Avg Shipping Time": "3a77392e-e4a8-4936-bc7c-0d0a40277be1",
  "Devices Sold": `cda9ed89-b4ac-40c5-9fd1-8bade2b96214`,
  "New Buyers": "bcbcf3c7-1d74-40ae-afd2-276895c136a4",
  "ASP per Shippment": "7856f07a-199a-4b70-b8c0-03f8be410871",
  "Unique Receivers": "49e79708-be54-4b07-9d45-bfd0f09a9df1",
  "Share GMV Buy Box": "a333e1af-2e4f-423b-b520-6b4ca1125bab",
};

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

const chartToVersus = (list, listFlag) => ({
  type: CHART_TO_VERSUS,
  list,
  listFlag,
});

const getChart = (charts) => ({
  type: GET_CHART,
  charts,
});

export const chartSelect = (selectedChart) => ({
  type: SELECTED_CHART,
  selectedChart,
});

export const deleteCharts = (id) => ({
  type: DELETE_CHART,
  id,
});

const deleteMetric = (id) => ({
  type: DELETE_METRIC,
  id,
});

export const copyList = (id) => ({
  type: COPY_CHART,
  id,
});

export const changeChart = (selectedChart) => ({
  type: SET_SELECTEDCHART,
  selectedChart,
});

const addMetric = (metric) => ({
  type: ADD_METRIC,
  metric,
});

export const changeTitle = (index, newName) => ({
  type: CHANGE_NAME,
  index,
  newName,
});

const changeInfo = (index, newChart) => ({
  type: CHANGE_METRIC_INFO,
  index,
  newChart,
});

export const changeView = (index, data) => ({
  type: CHANGE_VISUALIZATION,
  index,
  data,
});

export const deleteMetrics = (metricID) => ({
  type: DELETE_ROW,
  metricID,
});

const addName = (flags, newList) => ({
  type: ADD_NAME,
  flags,
  newList,
});

const deleteName = (flags, newList) => ({
  type: DELETE_NAME,
  flags,
  newList,
});

const addChartToVersus = (metric) => ({
  type: ADD_CHART_TO_VERSUS,
  metric,
});

export const shadowVersus = (id) => ({
  type: SET_SHADOW_TO_VERSUS,
  id,
});

export const addToVersus = (id) => {
  return (dispatch) =>
    axios
      .get(host + metricUrl[id])
      .then((res) => res.data)
      .then((metric) => dispatch(addChartToVersus(metric)));
};

export const fetchChart = (id, title) => {
  return (dispatch) =>
    axios
      .get(host + url[id])
      .then((res) => res.data)
      .then((chart) => {
        chart.title = title;
        return chart;
      })
      .then((charts) => dispatch(getChart(charts)));
};

export const removeMetric = (id, selectedChart, chartLength) => {
  if (id == 0 && chartLength == 1) {
    return (dispatch) => {
      dispatch(deleteCharts(selectedChart));
      dispatch(changeChart(0));
    };
  } else {
    return (dispatch) => {
      dispatch(deleteMetric(id));
    };
  }
};

export const addMetricToChart = (id) => {
  return (dispatch) =>
    axios
      .get(host + metricUrl[id])
      .then((res) => res.data)
      .then((metric) => dispatch(addMetric(metric)));
};

export const changeMetricInfo = (
  index,
  metric_id,
  site,
  subgroup,
  time_frame,
  comparison
) => {
  return (dispatch) => {
    let newChart = {
      metric_id,
      time_frame,
      dimension: {
        site,
        subgroup,
      },
      comparation: [comparison],
    };
    dispatch(changeInfo(index, newChart));
  };
};

export const sendToVersus = (list, listFlag) => {
  let listVersus = [];
  let diccionario = new Object();
  let newListFlags = [];
  if (listFlag.includes("MLA")) {
    newListFlags.push("MLA");
  }
  if (listFlag.includes("MLB")) {
    newListFlags.push("MLB");
  }
  if (listFlag.includes("MLM")) {
    newListFlags.push("MLM");
  }
  listFlag = listFlag.filter((x) => x != "MLA" && x != "MLB" && x != "MLM");
  let test = [...newListFlags, ...listFlag].slice(
    0,
    Math.min(listFlag.length + newListFlags.length, 4)
  );

  for (let i = 0; i < list.length; i++) {
    listVersus.push({
      ...list[i],
      dimension: { ...list[i].dimension, site: test },
    });
  }

  return (dispatch) => {
    dispatch(chartToVersus(listVersus, test));
  };
};

export const addCountry = (flags, newList) => {
  let listVersus = [];
  for (let i = 0; i < newList.length; i++) {
    listVersus.push({
      ...newList[i],
      dimension: { ...newList[i].dimension, site: flags },
    });
  }
  return (dispatch) => {
    dispatch(addName(flags, listVersus));
  };
};

export const changeTimeFrame = (flags, newList, newTimeFrame, metricID) => {
  console.log("New list es:", newList);
  console.log("Metric ID:", metricID);
  let listVersus = [];
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].metric_id == metricID) {
      listVersus.push({
        ...newList[i],
        time_frame: newTimeFrame,
        dimension: { ...newList[i].dimension, site: flags },
      });
    } else {
      listVersus.push({ ...newList[i] });
    }
  }
  return (dispatch) => {
    dispatch(addName(flags, listVersus));
  };
};

export const deleteCountry = (flags, list) => {
  let listVersus = [];
  for (let i = 0; i < list.length; i++) {
    listVersus.push({
      ...list[i],
      dimension: { ...list[i].dimension, site: flags },
    });
  }
  return (dispatch) => {
    dispatch(deleteName(flags, listVersus));
  };
};
