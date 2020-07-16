import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.scss";
export default ({ metricData, color }) => {
  const [chartData, setChartData] = useState({});

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
          borderColor: "#E4E4E4",
        },
      ],
    });
  };
  useEffect(() => {
    console.log("Entro al useEffect");
    console.log("La data es:", chartData);
    chart();
  }, [chartData.length]);
  return (
    <div className="chart" style={{ height: "100px" }}>
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
    </div>
  );
};
