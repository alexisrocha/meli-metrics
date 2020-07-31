import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";
import VersusMetric from "../versusMetric/VersusMetric";
import CloseIcon from "@material-ui/icons/Close";
import { deleteMetrics } from "../../redux/action-creator/Versus";
import "./versusContainer.scss";
export default function VersusChart({ array }) {
  const metric = useSelector(
    (store) => store.metric.metric[array[0].metric_id]
  );
  const dispatch = useDispatch();
  let date = new Date();

  const colors = {
    MARKETPLACE: "#ffd100",
    "MERCADO PAGO": "#00a6dc",
    "MERCADO ENVIOS": "#a9c534",
  };

  return (
    <>
      <div className="containerTitle">
        <span>
          {metric && (
            <Badge style={{ backgroundColor: colors[metric.group] }}>
              <span className="spanVersusNameGroup">
                {metric && metric.group}
              </span>
            </Badge>
          )}
          <span className="spanVersusNameCard">
            {metric && metric.display_name}
          </span>
          <span className="spanVersusLastUpdate">
            Last update:
            {" " +
              date.getMonth() +
              "/" +
              date.getDate() +
              "/" +
              date.getFullYear()}
          </span>
        </span>

        <span
          className="closeIcon"
          onClick={() => {
            dispatch(deleteMetrics(array[0].metric_id));
          }}
        >
          <CloseIcon />
        </span>
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
