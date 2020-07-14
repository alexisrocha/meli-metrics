import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Addmodal from "../addmodal/Addmodal";
import Metric from "../metric/Metric";
import { useSelector, useDispatch } from "react-redux"
import "./Single.scss";

export default function single() {
  const [modalShow, setModalShow] = useState(false);
  const charts = useSelector(store=>store.chart.charts)
  useEffect(()=>{
    console.log(charts)
  })
  return (
    <div className="single">
      <Addmodal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container">
      {charts.length > 0 ? (
          <div className="containerMetric">
            {charts[0].config.map(chart => <Metric key={chart.metric_id}/>)}
          </div> 
        ):(
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
