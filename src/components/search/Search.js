import React from "react";
import { Form } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.scss";

export default function Search() {
  return (
    <div className="addMetrics">
      <span>
        <b> Add metrics </b>
      </span>
      <Form className="form">
        <Form.Group className="forminputSearch">
          <Form.Control
            type="text"
            placeholder="Search metric"
            id="inputSearch"
          />
          <SearchIcon className="searchIcon" />
        </Form.Group>
      </Form>
    </div>
  );
}
