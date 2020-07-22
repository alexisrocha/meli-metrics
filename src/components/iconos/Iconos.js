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

    Promise.all(arrayMetricas);
  }

  function buscarTitulos(listaMetricas) {
    var listaIds = [];
    for (var i = 0; i < listaMetricas.length; i++) {
      listaIds.push(listaMetricas[i].metric_id);
    }
    console.log("Lista IDS:", listaIds);
    console.log("Lista nombres: ", listaNombres);
    var listaTitulos = [];

    for (var j = 0; j < Object.keys(listaNombres).length; j++) {
      console.log("X", listaNombres[listaIds[j]].name.slice(0, 3));
      listaTitulos.push(listaNombres[listaIds[j]].name.slice(0, 3));
      console.log("Vuelta numero:", j);
    }
    console.log("Lista titulos:", listaTitulos);
    return listaTitulos;
  }

  useEffect(() => {
    cargarMetricas();
    setListaIDS(buscarTitulos(listaMetricas));
  }, [listaIDS.length]);

  return (
    <div className="containerIconos">
      {listaIDS.map((elem) => {
        console.log("Lista IDS En return:", listaIDS);
        return (
          <div className="elemento">
            <Badge
              variant="secondary"
              style={{ backgroundColor: "#f2f2f2", color: "#7E7775" }}
            >
              {elem}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
