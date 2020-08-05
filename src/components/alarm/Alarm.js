import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import "../alarms/Alarms.scss";

export default function Alarm({ metricId, triggers }) {
  const dispatch = useDispatch();
  const metric = useSelector((store) => store.metric.metric[metricId]);
  useEffect(() => {
    dispatch(fetchMetric(metricId));
  }, []);
  return (
    metric ? (
    <>
        <div className="triggerOptions">
            <span>{metric.name}</span>
            <span>Period</span>
            <span>Site</span>
            <span>Comparisson</span>
        </div>

        {triggers.map((trigger, index)=>
        <div className="triggerData">
            <span className="triggerRegular">{"Trigger " + (index + 1)}</span>
            <span>{trigger.config.dimension.site}</span>
            <span>{trigger.trigger_type}</span>
            <span>{trigger.config.value}</span>
        </div>)}
    </>
    ) : (null)
    )
}
