import { GET_METRIC_DATA } from "../constants";

import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
  1: `32ef81e2-abf2-496f-a7a1-229183e60e49`,
  2: `fb224c30-4882-45a0-b74c-01ba4e51dc66`,
  8: "2589e285-5d32-48bb-9f41-d3d59a0ab4fb"
};

const getMetricData = (id, metricData) => ({
  type: GET_METRIC_DATA,
  id,
  metricData,
});

export const fetchMetricData = (id) => {
  return (dispatch) => {
    axios
      .get(host + url[id])
      .then((res) => res.data)
      .then((metricData) => dispatch(getMetricData(id, metricData)));
  };
};
