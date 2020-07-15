import { GET_METRICS } from "../constants"
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
    1: `beddddd4-e47c-43c2-8510-fe0fd7986c0a`,
    2: `d2ecd0d4-0234-45fb-a140-6f1d0f63d9b5`,
  };

const  getMetric = (id, metric) => ({
    type: GET_METRICS,
    id,
    metric
});


export const fetchMetric = (id) => (dispatch) => {
    axios.get(host+url[id])
    .then( res => res.data )
    .then( metric => dispatch( getMetric(id, metric) ) )
}