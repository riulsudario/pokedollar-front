import React, { useRef, useState } from 'react';
import { Radar } from "react-chartjs-2";
import styles from '../styles/components/Radar.module.scss';

interface chartDetails {
  chartDetails: object,
}

export function RadarChart(props: chartDetails) {
  const radarData = {
    labels: ["Ataque", "Ataque especial", "Defesa especial", "Defesa", "Pontos de vida",  "Velocidade"],
    datasets: [
      {
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [55, 40, 79, 99, 40, 47]
      }
    ]
  };

  const radarOptions = {
    scale: {
      ticks: {
        min: 0,
        max: 99,
        stepSize: 20,
        showLabelBackdrop: false,
        backdropColor: "rgba(203, 197, 11, 1)",
        responsive: true
      },
      angleLines: {
        color: "rgba(255, 255, 255, .3)",
        lineWidth: 1
      },
      gridLines: {
        color: "rgba(255, 255, 255, .3)",
        circular: false
      }
    },
    legend: {
      display: false
    },
  };

  const chartRef = useRef();
  return(
    <div className={styles.radarContainer}>
      <Radar ref={chartRef} data={radarData} options={radarOptions} />
    </div>
  );
}
