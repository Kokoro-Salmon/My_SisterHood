import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./Charts.css";
import useFetch from "../../Hooks/useFetch";

const COLORS = [
  "#1430B8",
  "#FD4D0C",
  "#448D76",
  "#FCBA12",
  "#B814B2",
  "#341109",
  "#66B032",
  "#00C49F",
  "#8601AF",
  "#FD3A0F",
  "#7CCD7C",
  "#6495ED",
  "#CDB79E",
];

const STATE_MAP = new Map([
  ["Andaman and Nicobar Islands", 0],
  ["Andhra Pradesh", 0],
  ["Arunachal Pradesh", 0],
  ["Assam", 0],
  ["Bihar", 0],
  ["Chandigarh", 0],
  ["Chhattisgarh", 0],
  ["Dadra and Nagar Haveli", 0],
  ["Daman and Diu", 0],
  ["Delhi", 0],
  ["Goa", 0],
  ["Jammu and Kashmir", 0],
  ["Gujarat", 0],
  ["Haryana", 0],
  ["Himachal Pradesh", 0],
  ["Jharkhand", 0],
  ["Karnataka", 0],
  ["Kerala", 0],
  ["Ladakh", 0],
  ["Madhya Pradesh", 0],
  ["Maharashtra", 0],
  ["Manipur", 0],
  ["Meghalaya", 0],
  ["Mizoram", 0],
  ["Nagaland", 0],
  ["Odisha", 0],
  ["Puducherry", 0],
  ["Punjab", 0],
  ["Rajasthan", 0],
  ["Sikkim", 0],
  ["Tamil Nadu", 0],
  ["Telangana", 0],
  ["Tripura", 0],
  ["Uttar Pradesh", 0],
  ["Uttarakhand", 0],
  ["Bengal", 0],
]);

export const StateAnalysisChart = () => {
  const { data, loading } = useFetch(
    "https://my-sisterhood.onrender.com/getIncidentFormData"
  );
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      console.log(data); // For debugging purposes

      let stateCountMap = new Map(STATE_MAP);

      for (let i = 0; i < data.length; ++i) {
        if (data[i].address && data[i].address.state) {
          stateCountMap.set(
            data[i].address.state,
            (stateCountMap.get(data[i].address.state) || 0) + 1
          );
        }
      }

      console.log(stateCountMap); // For debugging purposes

      let StateData = [];
      let idx = 0;
      for (let [key, value] of stateCountMap.entries()) {
        const obj = {
          id: idx,
          name: key,
          noOfCases: value,
        };
        idx = idx + 1;
        StateData.push(obj);
      }

      console.log(StateData); // For debugging purposes

      setStateData(StateData);

      const ctx = chartRef.current.getContext("2d");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: StateData.map((d) => d.name),
          datasets: [
            {
              label: "Number of Crimes",
              data: StateData.map((d) => d.noOfCases),
              backgroundColor: COLORS,
              borderColor: COLORS,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}`;
                },
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: "States",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Crimes",
              },
            },
          },
        },
      });
    }
  }, [data, loading]);

  return (
    <div className="StateWiseChartanaly">
      <div className="Stateanaly">
        <div className="Stateanlyheade">State Wise Crime Analytics</div>
      </div>
      <div className="stategraphanddisplay">
        <div className="Stategraph">
          <canvas className="canvaschart" ref={chartRef}></canvas>
        </div>
        {/* <div className="legend">
          {stateData.map((state, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="legend-label">{state.name}</span>
              <span className="legend-count">{state.noOfCases}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
