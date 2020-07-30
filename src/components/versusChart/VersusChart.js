import React from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import VersusMetric from "../versusMetric/VersusMetric";
import "./versusContainer.scss";
export default function VersusChart({ array }) {
  const metric = useSelector(
    (store) => store.metric.metric[array[0].metric_id]
  );
  return (
    <>
      <div>
        <Badge variant="warning">
          <span className="spanVersusNameGroup">{metric && metric.group}</span>
        </Badge>
        <span className="spanVersusNameCard">
          {metric && metric.display_name}
        </span>
        <span className="spanVersusLastUpdate"> {""} Last update:</span>
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
