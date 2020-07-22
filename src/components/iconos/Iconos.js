import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import Badge from "react-bootstrap/Badge";
import "./iconos.scss";
export default function Iconos({ listaMetricas }) {
  const listaNombres = useSelector((store) => store.metric.metric);
  const [listaIDS, setListaIDS] = React.useState([]);
  const dispatch = useDispatch();
  var arrayMetricas = [];

  function cargarMetricas() {
    for (var i = 0; i < listaMetricas.length; i++) {
      console.log("Lista ids:", listaMetricas[i].metric_id);
      arrayMetricas.push(dispatch(fetchMetric(listaMetricas[i].metric_id)));
    }
  }

  function buscarTitulos(listaMetricas) {
    var listaIds = [];
    for (var i = 0; i < listaMetricas.length; i++) {
      listaIds.push(listaMetricas[i].metric_id);
    }
    console.log("Lista IDS:", listaIds);
    console.log("Lista nombres: ", listaNombres);
    var listaTitulos = [];
    console.log("Antes del for");
    for (var j = 0; j < Math.min(listaIds.length, 4); j++) {
      listaTitulos.push(listaNombres[listaIds[j]].name.slice(0, 3));
    }
    console.log("Lista titulos:", listaTitulos);
    return listaTitulos;
  }

  useEffect(() => {
    new Promise(function (resolv, reject) {
      resolv(cargarMetricas());
    }).then(() => {
      var resp = buscarTitulos(listaMetricas);
      setListaIDS(resp);
    });
  }, [listaIDS.length]);

  return (
    <div className="containerIconos">
      {listaIDS.map((elem) => {
        console.log("Lista IDS En return:", listaIDS);
        return (
          <div className="elemento">
            <Badge
              variant="secondary"
              style={{
                backgroundColor: "#f2f2f2",
                color: "#7E7775",
                fontFamily: "Proxima Nova",
              }}
            >
              {elem}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}