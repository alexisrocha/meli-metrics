import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { Form } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { addMetricToChart } from "../../redux/action-creator/Charts"
import "./Search.scss";

export default function Search() {
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="addMetrics">
      <span>
        <b> Add metrics </b>
      </span>
      <Form className="form" autocomplete="off">
        <Form.Group className="forminputSearch">
          <Form.Control
            value={valueInput}
            type="text"
            placeholder="Search metric"
            id="inputSearch"
            list="inputSearchlist"
            onChange={(e)=>setValueInput(e.target.value)}
          />
            <datalist id="inputSearchlist">
              <option>Buy Box</option>
              <option>Devices Sold</option>
              <option>Share GMV Buy Box</option>
            </datalist>
          <SearchIcon className="searchIcon" onClick={()=>{
            dispatch(addMetricToChart(valueInput))
            setValueInput("")
            }}/>
        </Form.Group>
      </Form>
    </div>
  );
}
