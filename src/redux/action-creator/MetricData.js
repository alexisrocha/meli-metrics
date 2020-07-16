import { GET_METRIC_DATA } from "../constants";

import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
  1: `0ca2c344-a2f8-432a-9b62-da3cd924c7d5`,
  2: `fb224c30-4882-45a0-b74c-01ba4e51dc66`,
  3: "81b7403f-0ecf-4953-bffa-bf5de4c863c9",
  4: "32ef81e2-abf2-496f-a7a1-229183e60e49",
  5: "ff996f39-c774-411f-ba96-fe8ffb64d331",
  6: "5f8f6696-b594-434e-9553-87e8f531f373",
  7: "a6209efd-db91-4904-b817-a916836dec85",
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
