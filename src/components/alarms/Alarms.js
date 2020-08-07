import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import Alarm from "../alarm/Alarm";
import "./Alarms.scss";

export default function Alarms() {
  const metric = useSelector((store) => store.metric.metric);
  const list = useSelector((store) => store.alarm.alarms);
  return (
    <div id="alarms" className="container">
      {metric &&
      list
        .map((elem) => {
          return elem.triggers.length;
        })
        .filter((x) => x > 0).length ? (
        list.map((alarm, index) => {
          if (alarm.triggers.length) {
            return (
              <Alarm
                metricId={alarm.metric_id}
                triggers={alarm.triggers}
                index={index}
              />
            );
          }
        })
      ) : (
        <p id="noAlarms">There are no alarms to display</p>
      )}
    </div>
  );
}
