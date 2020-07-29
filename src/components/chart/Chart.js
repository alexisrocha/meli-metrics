import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.scss";
export default ({ metricData, color }) => {
  const [chartData, setChartData] = useState([]);

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
      <Line
        data={chartData}
        options={{
          tooltips: {
            mode: 'x',
            intersect: false,
            displayColors: true,
            callbacks: {
              label:function(tooltipItem, data) {
                return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                });
              },
              labelColor: function(tooltipItem, chart){
                if (tooltipItem.datasetIndex == 0) {
                  return {
                    borderColor: color,
                    backgroundColor: color
                  }
                }else {
                  return {
                    borderColor: '#e6e6e6',
                    backgroundColor: '#e6e6e6'
                  }
                }
                ;
              }
            }
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
    </div>
  );
};
