import { ADD_ALARM, DELETE_ALARM, EDIT_ALARM } from "../constants";
import axios from "axios";

export const addAlarm = (id, alarm) => ({
  type: ADD_ALARM,
  id,
  alarm,
});

export const editAlarm = (metricID, alarm, triggerID) => ({
  type: EDIT_ALARM,
  metricID,
  alarm,
  triggerID,
});

export const deleteAlarm = (metricID, idTriggers) => ({
  type: DELETE_ALARM,
  metricID,
  idTriggers,
});
