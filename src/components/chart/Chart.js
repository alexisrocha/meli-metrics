import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.scss";
export default () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "AY",
          data: [100, 95, 105, 123, 110, 96, 92, 88, 80, 99, 110, 136],
          backgroundColor: "transparent",
          borderWidth: 4,
          borderColor: "#f5cf3c",
        },
        {
          label: "AY",
          data: [80, 87, 97, 101, 125, 97, 94, 100, 95, 113, 120, 100],
          backgroundColor: "transparent",
          borderWidth: 4,
          borderColor: "#E4E4E4",
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="chart">
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
        }}
      />
    </div>
  );
};
