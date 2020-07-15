import { GET_METRIC_DATA } from "../constants";

import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
    1: `0ca2c344-a2f8-432a-9b62-da3cd924c7d5`,
    2: `dab0f092-acde-4fc9-933e-0c7344cba6cb`,
  };

const  getMetricData = (id, metricData) => ({
    type: GET_METRIC_DATA,
    id,
    metricData
});

export const fetchMetricData = (id) => {
    return (dispatch) => {
        axios.get(host + url[id])
            .then(res => res.data)
            .then(metricData => dispatch(getMetricData(id, metricData)));
    };
}