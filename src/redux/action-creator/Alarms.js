import { ADD_ALARM } from "../constants";
import axios from "axios";

export const addAlarm = (alarm) => ({
    type: ADD_ALARM,
    alarm,
  });