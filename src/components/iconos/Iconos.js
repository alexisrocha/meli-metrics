import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import Badge from "react-bootstrap/Badge";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import "./iconos.scss";

export default function Iconos({ listaMetricas }) {
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

    for (var j = 0; j < listaIds.length; j++) {
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

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);
  return (
    <div className="containerIconos">
      {Array.from(new Set(listaIDS)).map((elem, index) => {
        if (!diccionario[elem] && index < 4) {
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
        } else if (index == 4 && Object.keys(diccionario).length >= 4) {
          return (
            <HtmlTooltip
              title={
                <React.Fragment>
                  {listaIDS.map((elem, index) => {
                    if (index >= 4 && !diccionario[elem]) {
                      diccionario[elem] = true;
                      return (
                        <p style={{ fontFamily: "Proxima Nova" }}>{elem}</p>
                      );
                    }
                  })}
                </React.Fragment>
              }
            >
              <Badge
                variant="secondary"
                style={{
                  backgroundColor: "#f2f2f2",
                  color: "#7E7775",
                  fontFamily: "Proxima Nova",
                }}
              >
                ...
              </Badge>
            </HtmlTooltip>
          );
        }
      })}
    </div>
  );
}
