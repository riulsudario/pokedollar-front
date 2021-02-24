import React, { useRef } from 'react';
import { Radar } from "react-chartjs-2";
import styles from '../styles/components/Radar.module.scss';

interface chartDetails {
  chartDetails: {
    max_base_stat: number,
    step_size: number,
  },
  statsDetails: [
    {
      name: string,
      base_stat: number,
    }
  ]
}

export function RadarChart(props: chartDetails) {
  const names = [];
  const baseStats = []

  props.statsDetails.map((stat, i) => {
    names.push(stat.name);
    baseStats.push(stat.base_stat)
  });

  const radarData = {
    labels: names,
    datasets: [
      {
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: baseStats
      }
    ]
  };

  const radarOptions = {
    scale: {
      ticks: {
        min: 0,
        max: props.chartDetails.max_base_stat,
        stepSize: props.chartDetails.step_size,
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
