import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Metric from "../metric/Metric";
import Grid from "@material-ui/core/Grid";
import VersusMetric from "../versusMetric/VersusMetric";
import VersusChart from "./VersusChart";
import "./versusContainer.scss";
export default function VersusChartContainer() {
  const chartVersus = useSelector((store) => store.versus.chartVersus);
  const flags = useSelector((store) => store.versus.selectedCountries);

  function separarArray(array, numero) {
    let contador = 0;
    let arregloFinal = [];
    let arrayFrag = [];
    for (let i = 0; i < array.length; i++) {
      if (contador == numero - 1) {
        arrayFrag.push(array[i]);
        arregloFinal.push(arrayFrag);
        arrayFrag = [];
        contador = 0;
      } else {
        contador++;
        arrayFrag.push(array[i]);
      }
    }
    return arregloFinal;
  }
  let arrayDeCharts = [];
  if (flags.length > 0) {
    arrayDeCharts = separarArray(chartVersus, flags.length);
  }

  useEffect(() => {}, [arrayDeCharts.length, flags.length]);

  return (
    <div>
      {arrayDeCharts.length &&
        arrayDeCharts.map((chart, index) => <VersusChart array={chart} />)}
    </div>
  );
}
