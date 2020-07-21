import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import "./iconos.scss";
export default function Iconos({ listaMetricas }) {
  const listaNombres = useSelector((store) => store.metric.metric);
  const [listaIDS, setListaIDS] = React.useState([]);

  function buscarTitulos(listaMetricas) {
    var listaIds = [];
    for (var i = 0; i < listaMetricas.length; i++) {
      listaIds.push(listaMetricas[i].metric_id);
    }
    console.log("Lista IDS:", listaIds);
    var listaTitulos = [];
    for (var j = 0; j < Math.min(Object.keys(listaNombres).length, 4); j++) {
      listaTitulos.push(listaNombres[listaIds[j]].name.slice(0, 3));
      console.log("Vuelta numero:", j);
    }
    console.log("LIsta titulos:", listaTitulos);
    return listaTitulos;
  }

  var resp = buscarTitulos(listaMetricas);

  useEffect(() => {
    setListaIDS(resp);
  }, [resp.length]);

  return (
    <div className="containerIconos">
      {listaIDS.map((elem) => {
        return (
          <div className="elemento">
            <Badge variant="secondary">{elem}</Badge>
          </div>
        );
      })}
    </div>
  );
}
