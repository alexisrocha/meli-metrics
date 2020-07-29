import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Metric from "../metric/Metric";
import Grid from "@material-ui/core/Grid";
import VersusMetric from "../versusMetric/VersusMetric";
import "./versusContainer.scss";
export default function VersusChart({ array }) {
  const metric = useSelector(
    (store) => store.metric.metric[array[0].metric_id]
  );
  console.log("Array en versus chart:", array);
  return (
    <>
      <div>
        <span>{metric && metric.group}</span>
        <span>{metric && metric.display_name}</span>
        <span>Last update:</span>
      </div>
      <div className="versusContainer">
        {array &&
          array.map((elem, index) => {
            return (
              <VersusMetric
                key={index}
                idMetrica={elem.metric_id}
                deleteId={index}
                chart={elem}
              />
            );
          })}
      </div>
    </>
  );
}
