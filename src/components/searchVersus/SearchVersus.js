import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { addToVersus } from "../../redux/action-creator/Charts";
import "../search/Search.scss";

export default function Search() {
  const [valueInput, setValueInput] = useState("");
  const dispatchInfo = () => {
    dispatch(addToVersus(valueInput));
    setValueInput("");
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      dispatchInfo();
    }
  };
  const dispatch = useDispatch();

  return (
    <div className="addMetrics" style={{ marginBottom: "-15px" }}>
      <span>
        <b> Add metrics </b>
      </span>
      <Form
        className="form"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group className="forminputSearch">
          <Form.Control
            value={valueInput}
            type="text"
            onKeyDown={keyPress}
            placeholder="Search metric"
            id="inputSearch"
            list="inputSearchlist"
            onChange={(e) => {
              setValueInput(e.target.value);
            }}
          />
          <datalist id="inputSearchlist">
            <option>Buy Box - GMV</option>
            <option>Devices Sold</option>
            <option>CBT - ASP(e) Billable</option>
            <option>Avg Shipping Time</option>
            <option>New Buyers</option>
            <option>ASP per Shippment</option>
            <option>Unique Receivers</option>
            <option>Share GMV Buy Box</option>
          </datalist>
          <SearchIcon
            className="searchIcon"
            onClick={() => {
              dispatchInfo();
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
