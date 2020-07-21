import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Addmodal from "../addmodal/Addmodal";

import "./List.scss";

export default function List() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="crearLista">
        <span>
          <div className="crearListaContainer">
            <b onClick={() => setModalShow(true)}> Create list</b>
          </div>
        </span>
      </div>
      <Addmodal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
