import { CHART_TO_VERSUS, ADD_CHART_TO_VERSUS, DELETE_ROW } from "../constants";
import { ListItemText } from "@material-ui/core";
import axios from "axios";

let host = "https://run.mocky.io/v3/";

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
