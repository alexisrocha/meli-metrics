import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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
  return metric ? (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className="triggerOptions"
      >
        <Grid xs={2}></Grid>
        <Grid xs={2}>
          <span>{metric.name}</span>
        </Grid>
        <Grid xs={2} className="titles">
          <span>Period</span>
        </Grid>
        <Grid xs={1} className="titles">
          <span>Site</span>
        </Grid>
        <Grid xs={2} className="titles">
          <span>Comparisson</span>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
      {triggers.map((trigger, index) => (
        <Grid
          container
          direction="row"
          alignItems="center"
          className="triggerData"
        >
          <Grid xs={2}></Grid>
          <Grid xs={2} className="dataOption">
            <span className="triggerRegular">{"Trigger " + (index + 1)}</span>
          </Grid>
          <Grid xs={2} className="dataOption">
            <span>{trigger.config.dimension.site}</span>
          </Grid>
          <Grid xs={1} className="dataOption">
            <span>{trigger.trigger_type}</span>
          </Grid>
          <Grid xs={2} className="dataOption">
            <span>{trigger.config.value}</span>
          </Grid>
          <Grid xs={1} className="dataOption icons" >
            <EditIcon />
            <DeleteIcon />
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      ))}
    </>
  ) : null;
}