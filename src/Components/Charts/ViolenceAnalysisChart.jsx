import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./Charts.css";
import useFetch from "../../Hooks/useFetch";

const COLORS = [
  "#1430B8", // Physical Assault
  "#FD4D0C", // Rape/Sexual Assault
  "#448D76", // Chain Snatching/Robbery
  "#FCBA12", // Domestic Violence
  "#B814B2", // Stalking
  "#341109", // Ogling/Facial Expressions/Staring
  "#66B032", // Taking photos without permission
  "#00C49F", // Indecent Exposure/Masturbation in public
  "#8601AF", // Touching /Groping
  "#FD3A0F", // Showing Pornography without consent
  "#7CCD7C", // Commenting/Sexual Invites
  "#6495ED", // Online Harassment
  "#CDB79E", // Human Trafficking
];

const LABELS = [
  "Physical Assault",
  "Rape/Sexual Assault",
  "Chain Snatching/Robbery",
  "Domestic Violence",
  "Stalking",
  "Ogling/Facial Expressions/Staring",
  "Taking photos without permission",
  "Indecent Exposure/Masturbation in public",
  "Touching /Groping",
  "Showing Pornography without consent",
  "Commenting/Sexual Invites",
  "Online Harrasment",
  "Human Trafficking",
];

export const ViolenceAnalysisChart = () => {
  const { data, loading, reFetch } = useFetch(
    "http://localhost:3000/getIncidentFormData"
  );
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [violenceData, setViolenceData] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      const violenceCountMap = new Map(LABELS.map((label) => [label, 0]));

      data.forEach((incident) => {
        const currentCount = violenceCountMap.get(incident.typeOfViolence) || 0;
        violenceCountMap.set(incident.typeOfViolence, currentCount + 1);
      });

      const formattedData = [];
      let idx = 0;
      for (let [key, value] of violenceCountMap.entries()) {
        formattedData.push({
          id: idx,
          name: key,
          noOfCases: value,
        });
        idx++;
      }

      setViolenceData(formattedData);

      const ctx = chartRef.current.getContext("2d");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: formattedData.map((d) => d.name),
          datasets: [
            {
              data: formattedData.map((d) => d.noOfCases),
              backgroundColor: COLORS,
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
        },
      });
    }
  }, [data, loading]);

  return (
    <div className="ViolenceWiseChartanaly">
      <div className="Violenceanaly">
        <div className="Violenceanlyheade">Violence Wise Analytics</div>
      </div>
      <div className="violencegraphanddisplay">
        <div className="Violencegraph">
          <canvas className="canvaschart" ref={chartRef}></canvas>
        </div>
        <div className="legend">
          {LABELS.map((label, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="legend-label">{label}</span>
              <span className="legend-count">
                {violenceData.find((data) => data.name === label)?.noOfCases || 0}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
