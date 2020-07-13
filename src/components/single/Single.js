import React from "react";
import { Link } from "react-router-dom";
import Addmodal from "../addmodal/Addmodal";
import Metric from "../metric/Metric";
import "./Single.scss";

export default function single() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="single">
      <Addmodal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container">
         <div id="addcard">
          <h2 onClick={() => setModalShow(true)} id="add">
            +
          </h2>
          <span onClick={() => setModalShow(true)}>Add a metric</span>
        </div>

        {/* <div className="containerMetric">
          <Metric />
        </div> */}
      </div>
    </div>
  );
}
