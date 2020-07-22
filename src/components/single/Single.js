import React, { useState, useEffect, usePrevious, useRef } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Addmodal from "../addmodal/Addmodal";
import Metric from "../metric/Metric";
import { useSelector, useDispatch } from "react-redux";
import { chartSelect } from "../../redux/action-creator/Charts";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { setLocation } from "../../redux/action-creator/Location";
import Search from "../search/Search";
import "./Single.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function single({ history }) {
  const [modalShow, setModalShow] = useState(false);
  const charts = useSelector((store) => store.chart.charts);
  const location = useSelector((store) => store.location);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(setLocation("main"));
    if (charts[selectedChart])
      dispatch(chartSelect(charts[selectedChart].config));
  }, [charts.length, location.location]);

  return (
    <div className="single">
      <Addmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
        history={history}
      />
      <div className="container">
        {charts.length > 0 ? (
          <>
            {charts[selectedChart] && charts[selectedChart].config.length ? (
              <Grid
                className={classes.root}
                container
                justify="flex-start"
                spacing={3}
                alignItems="flex-start"
              >
                <Grid key={1} item xs={12}>
                  <Search />
                </Grid>
              </Grid>
            ) : (
              <div id="addcard">
                <h2 onClick={() => setModalShow(true)} id="add">
                  +
                </h2>
                <span onClick={() => setModalShow(true)}>Add a metric</span>
              </div>
            )}

            <Grid
              className={classes.root}
              container
              justify="flex-start"
              spacing={3}
              alignItems="flex-start"
            >
              {charts[selectedChart] &&
                charts[selectedChart].config.map((chart) => {
                  return (
                    <Grid key={chart.metric_id} item xs={3}>
                      <Metric
                        key={chart.metric_id}
                        idMetrica={chart.metric_id}
                        chart={chart}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </>
        ) : (
          <div id="addcard">
            <h2 onClick={() => setModalShow(true)} id="add">
              +
            </h2>
            <span onClick={() => setModalShow(true)}>Add a metric</span>
          </div>
        )}
      </div>
    </div>
  );
}
