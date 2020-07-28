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
} from "../constants";
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
  "Buy Box - GMV": `0bb9fde4-c5c2-4a40-9630-466fec01b377`,
  "CBT - ASP(e) Billable": "dd639092-466b-4430-81c1-73fd9b5829c9",
  "Avg Shipping Time": "6477bf45-b68e-45f3-83a5-1a798c517ac6",
  "Devices Sold": `3af1379f-4676-4d4e-958f-d5fb9c379fd4`,
  "New Buyers": "25e5d4bf-fca9-4161-9175-72020548c29a",
  "ASP per Shippment": "6c098f7d-aeb9-44e3-9dd3-40240b4c789b",
  "Unique Receivers": "226724ff-5b90-4b39-9d4c-8a32139d8ade",
  "Share GMV Buy Box": "0145f405-c88d-4aca-a056-12cc03e3c1a2",
};

let metricUrl = {
  "Buy Box - GMV": "930ee191-8d1e-43b8-b7a7-0213a31eadb9",
  "CBT - ASP(e) Billable": "d720e0d3-f70e-41e9-9abe-58285e395fed",
  "Avg Shipping Time": "ce8ec606-5383-4169-a423-a2e5620c63c7",
  "Devices Sold": "f0c1db20-2b03-4f07-80f8-d4b22e5e0257",
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

const changeName = (index, newName) => ({
  type: CHANGE_NAME,
  index,
  newName,
});

const changeInfo = (index, newChart) => ({
  type: CHANGE_METRIC_INFO,
  index,
  newChart
})

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

export const copyList = (id) => {
  return (dispatch) => {
    dispatch(copyChart(id));
  };
};

export const addMetricToChart = (id) => {
  return (dispatch) =>
    axios
      .get(host + metricUrl[id])
      .then((res) => res.data)
      .then((metric) => dispatch(addMetric(metric)));
};

export const changeTitle = (index, newName) => {
  return (dispatch) => {
    dispatch(changeName(index, newName));
  };
};

export const changeMetricInfo = (index, metric_id, site, subgroup, time_frame, comparison) =>{
  return (dispatch) => {
    let newChart = {
      metric_id,
      time_frame,
      dimension: {
        site,
        subgroup
      },
      comparation: [comparison]
    }
    dispatch(changeInfo(index, newChart))
  }
}