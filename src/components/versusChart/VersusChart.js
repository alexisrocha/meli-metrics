import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Metric from "../metric/Metric";
import Grid from "@material-ui/core/Grid";
import VersusMetric from "../versusMetric/VersusMetric";
import "./versusContainer.scss";
export default function VersusChart({ array }) {
  console.log("Array en versus chart:", array);
  return (
    <>
      <p>HOla</p>
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
