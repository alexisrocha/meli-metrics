import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import Badge from "react-bootstrap/Badge";

import Tooltip from "@material-ui/core/Tooltip";
import "./iconos.scss";

export default function Iconos({ listaMetricas }) {
  console.log("Lista metricas:", listaMetricas);
  const listaNombres = useSelector((store) => store.metric.metric);
  const [listaIDS, setListaIDS] = React.useState([]);
  const [name, setName] = React.useState(null);
  const dispatch = useDispatch();
  var arrayMetricas = [];

  function cargarMetricas() {
    for (var i = 0; i < listaMetricas.length; i++) {
      arrayMetricas.push(dispatch(fetchMetric(listaMetricas[i].metric_id)));
    }
  }

  function buscarTitulos(listaMetricas) {
    var listaIds = [];
    for (var i = 0; i < listaMetricas.length; i++) {
      listaIds.push(listaMetricas[i].metric_id);
    }

    var listaTitulos = [];

    for (var j = 0; j < Math.min(listaIds.length, 4); j++) {
      listaTitulos.push(listaNombres[listaIds[j]].display_name);
    }

    return listaTitulos;
  }

  var resp = [];
  let diccionario = new Object();
  useEffect(() => {
    new Promise(function (resolv, reject) {
      resolv(cargarMetricas());
    }).then(() => {
      resp = buscarTitulos(listaMetricas);
      setListaIDS(resp);
    });
  }, [resp.length, listaIDS.length, listaMetricas]);

  return (
    <div className="containerIconos">
      {listaIDS.map((elem, index) => {
        if (!diccionario[elem]) {
          diccionario[elem] = true;
          return (
            <div className="elemento" key={index}>
              <Tooltip title={elem} placement="bottom-start">
                <Badge
                  variant="secondary"
                  style={{
                    backgroundColor: "#f2f2f2",
                    color: "#7E7775",
                    fontFamily: "Proxima Nova",
                  }}
                >
                  {elem.slice(0, 3).toUpperCase()}
                </Badge>
              </Tooltip>
            </div>
          );
        }
      })}
    </div>
  );
}
