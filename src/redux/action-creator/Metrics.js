import { GET_METRICS } from "../constants"
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
    1: `4af8049f-3477-4337-9853-bfe616f0d049`,
    2: `d2ecd0d4-0234-45fb-a140-6f1d0f63d9b5`,
    3: "0d901dc2-6024-48d9-97f3-5145408329b1",
    4: "ff5a47cc-9dc9-4617-958c-c57c1ed66491",
    5: "70e3f815-5cc9-4691-8fd9-4be83fcd0416",
    6: "cd10c0cc-4c88-4693-8025-8ee062a409f8",
    7: "8a0f81b7-4ad5-4f0d-989b-180f7ecb8e17",
    8: "2037837b-2caa-4a29-8ac2-48fef5e6ff5d"
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