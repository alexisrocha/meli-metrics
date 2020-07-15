import React, { useState, useEffect, usePrevious, useRef } from "react";
import { Link } from "react-router-dom";
import Addmodal from "../addmodal/Addmodal";
import Metric from "../metric/Metric";
import { useSelector, useDispatch } from "react-redux";
import { chartSelect } from "../../redux/action-creator/Charts";
import "./Single.scss";

export default function single() {
  const [modalShow, setModalShow] = useState(false);
  const charts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (charts.length) dispatch(chartSelect(charts[0].config));
  }, [charts.length]);

  return (
    <div className="single">
      <Addmodal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container">
        {charts.length > 0 ? (
          <div className="containerMetric">
            {selectedChart &&
              selectedChart.map((chart) => {
                console.log("La key en Single es:", chart.metric_id);
                return (
                  <Metric key={chart.metric_id} idMetrica={chart.metric_id} />
                );
              })}
          </div>
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
