import { GET_METRICS } from "../constants"
import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url = {
    1: `beddddd4-e47c-43c2-8510-fe0fd7986c0a`,
    2: `d2ecd0d4-0234-45fb-a140-6f1d0f63d9b5`,
    3: "65b7aa8e-9f35-4b24-82f5-334957cde795",
    4: "551c0751-e44b-4551-8ad7-4b489d545802",
    5: "70e3f815-5cc9-4691-8fd9-4be83fcd0416",
    6: "565a1c9d-5ca7-43d9-a604-9d57258dbd21",
    7: "8a0f81b7-4ad5-4f0d-989b-180f7ecb8e17",
    8: "c91e84d2-f505-403a-bde0-094a6c1d9059"
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