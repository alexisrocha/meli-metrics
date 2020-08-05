import { GET_METRIC_DATA } from "../constants";

import axios from "axios";

let host = "https://run.mocky.io/v3/";

let url60 = {
  1: `0ca2c344-a2f8-432a-9b62-da3cd924c7d5`,
  2: `decf5f46-2492-47aa-8304-c8cace4037bf`,
  3: "90279549-fd39-4bf2-8622-959334449240",
  4: "c2b30927-10bd-467a-ab5a-c5718d9c1b30",
  5: "763a58b9-ef20-4863-801a-6069f5916dc6",
  6: "5f8f6696-b594-434e-9553-87e8f531f373",
  7: "a6209efd-db91-4904-b817-a916836dec85",
  8: "31409546-41a8-467a-a96b-27899ec667ff"
};
let url12 = {
  1: `4a691a71-4bfa-4e56-8cd2-007d7e20404b`,
  2: `81b7403f-0ecf-4953-bffa-bf5de4c863c9`,
  3: "ea0e8e64-ce75-495d-91d6-83d9b429b1e9",
  4: "6737bd63-fd5b-4c32-b773-2417896cce1e",
  5: "ff996f39-c774-411f-ba96-fe8ffb64d331",
  6: "eb5f1c4c-a6eb-452f-ad93-80b4b23a50fd",
  7: "91bbbd73-bd82-4418-a2fb-23d1e572c90a",
  8: "90834ac6-afca-42fb-b14e-588aa2f33e35"
};
let url4 = {
  1: `c3fd409a-a428-4e86-accb-1ad29687cb76`,
  2: `245b0073-9f24-4d7a-8dff-81162bad02a9`,
  3: "ff00300e-9576-4c03-a596-db8c6b5c4102",
  4: "e1fb7304-a4b4-433c-876a-ea2afb629dd3",
  5: "fe04d30b-9bd6-47f2-b969-6f76f2a5cefa",
  6: "ff7e2746-aa2c-42c6-9bc2-51dd4b23ca8f",
  7: "6df298fc-633d-4159-bc6c-fd2c8cb5dab3",
  8: "33544fbe-5bca-40e4-ae59-a083c4f63bed"
};
let url = {
  "60days": url60,
  "12months": url12,
  "4weeks": url4
}

const getMetricData = (id, metricData, timeFrame) => ({
  type: GET_METRIC_DATA,
  id,
  metricData,
  timeFrame
});

export const fetchMetricData = (id, timeFrame) => {
  return (dispatch) => {
    axios
      .get(host + url[timeFrame][id])
      .then((res) => res.data)
      .then((metricData) => dispatch(getMetricData(id, metricData, timeFrame)));
  };
};
