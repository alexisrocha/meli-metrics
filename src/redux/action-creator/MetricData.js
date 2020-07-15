import { GET_METRIC_DATA } from "../constants";

import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
    1: `decf5f46-2492-47aa-8304-c8cace4037bf`,
    2: `c3fd409a-a428-4e86-accb-1ad29687cb76`,
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