import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Addmodal from "../addmodal/Addmodal";
import Metric from "../metric/Metric";
import SearchIcon from "@material-ui/icons/Search";
import "./Single.scss";

export default function single() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="single">
      <Addmodal show={modalShow} onHide={() => setModalShow(false)} />
      {/* <div className="container">
       <div id="addcard">
          <h2 onClick={() => setModalShow(true)} id="add">
            +
          </h2>
          <span onClick={() => setModalShow(true)}>Add a metric</span>
        </div> */}

      <div className="addMetrics">
        <span>
          <b> Add metrics </b>
        </span>
        <Form className="form">
          <Form.Group className="forminput">
            <Form.Control
              type="text"
              placeholder="Search metric"
              id="inputSearch"
            />
            <SearchIcon className="searchIcon" />
          </Form.Group>
        </Form>
      </div>

      <div className="containerMetric">
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />

        <div className="containerMetric"></div>
      </div>
    </div>
  );
}
