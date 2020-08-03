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

  function replaceSite(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].dimension.site.length; j++) {
        let obj = new Object();
        obj = {
          ...array[i],
          dimension: { ...obj.dimension, site: array[i].dimension.site[j] },
        };
        newArray.push(obj);
        console.log("Obj es :", obj);
      }
    }

    return newArray;
  }

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
    arrayDeCharts = separarArray(replaceSite(chartVersus), flags.length);
  }
  useEffect(() => {}, [arrayDeCharts.length, flags.length]);
  return (
    <div>
      {arrayDeCharts.length &&
        arrayDeCharts.map((chart, index) => {
          return <VersusChart array={chart} />;
        })}
    </div>
  );
}
