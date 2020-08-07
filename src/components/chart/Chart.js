import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.scss";

export default ({ metricData, color, metricID, format }) => {
  const [chartData, setChartData] = useState([]);
  console.log("ME estoy renderizando");
  const chart = () => {
    setChartData({
      labels: metricData.labels,
      datasets: [
        {
          label: metricData.data[0].name,
          data: metricData.data[0].data,
          backgroundColor: "transparent",
          borderWidth: 1.5,
          borderColor: color,
        },
        {
          label: metricData.data[1].name,
          data: metricData.data[1].data,
          backgroundColor: "transparent",
          borderWidth: 1.5,
          borderColor: "#e6e6e6",
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, [chartData.length, metricData.labels]);

  return (
    <div className="chart" style={{ height: "100px" }}>
      {metricID != -1 ? (
        <Line
          data={chartData}
          options={{
            tooltips: {
              hover: {
                animationDuration: 0,
              },
              mode: "x",
              intersect: false,
              displayColors: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  if (tooltipItem.datasetIndex == 0 && format == 'CUR_2') {
                    return (
                      "$" +
                      Number(tooltipItem.yLabel)
                        .toFixed(0)
                        .replace(/./g, function (c, i, a) {
                          return i > 0 && c !== "." && (a.length - i) % 3 === 0
                            ? "," + c
                            : c;
                        })
                    );
                  } else if(tooltipItem.datasetIndex == 0 && format == 'INTEG'){
                    return (
                      Number(tooltipItem.yLabel)
                        .toFixed(0)
                        .replace(/./g, function (c, i, a) {
                          return i > 0 && c !== "." && (a.length - i) % 3 === 0
                            ? "," + c
                            : c;
                        })
                    );
                  } else if(tooltipItem.datasetIndex == 0 && format == 'DEC_2'){
                    return Number(tooltipItem.yLabel)
                  }else if(tooltipItem.datasetIndex == 0 && format == 'PERC_2'){
                    return ((Number(tooltipItem.yLabel)*100).toFixed(2) + '%')
                  }else {
                    let percentage = Math.trunc(
                      ((data.datasets[0].data[tooltipItem.index] -
                        Number(tooltipItem.yLabel)) /
                        data.datasets[0].data[tooltipItem.index]) *
                        100
                    );
                    if (percentage > 0) return "YOY " + "▲ " + percentage + "%";
                    return "YOY " + "▼ " + percentage + "%";
                  }
                },
                labelColor: function (tooltipItem, chart) {
                  if (tooltipItem.datasetIndex == 0) {
                    return {
                      borderColor: color,
                      backgroundColor: color,
                    };
                  } else {
                    return {
                      borderColor: "#e6e6e6",
                      backgroundColor: "#e6e6e6",
                    };
                  }
                },
              },
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
          }}
        />
      ) : (
        <Line
          data={chartData}
          options={{
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  );
};
