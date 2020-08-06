import { ADD_ALARM, DELETE_ALARM } from "../constants";
import axios from "axios";

export const addAlarm = (id, alarm) => ({
  type: ADD_ALARM,
  id,
  alarm,
});

export const deleteAlarm = (metricID, idTriggers) => ({
  type: DELETE_ALARM,
  metricID,
  idTriggers,
});
