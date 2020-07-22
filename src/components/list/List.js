import React, { useEffect, useState } from "react";
import Listar from "../listar/Listar";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/action-creator/Location";
import Addmodal from "../addmodal/Addmodal";
import "./List.scss";

export default function List() {
  const [modalShow, setModalShow] = useState(false);
  const location = useSelector((store) => store.location.location);
  const listsCharts = useSelector((store) => store.chart.charts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLocation("list"));
  }, [location]);
  return (
    <div className="container">
      <div className="crearLista">
        <span>
          <div className="crearListaContainer">
            <b onClick={() => setModalShow(true)}> Create list</b>
          </div>
        </span>
      </div>

      <Addmodal show={modalShow} onHide={() => setModalShow(false)} />
      <Listar listsCharts={listsCharts} />
    </div>
  );
}
