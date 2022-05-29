// import { ChangeEvent, useState, FC, useCallback } from "react";
// import { ChangeEvent, useState, FC } from 'react';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
import '../../index.css'

Chart.register(...registerables)

const labels: string[] = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月"]
/*
export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
 */
/*
// background-color を変えたかった
const ctx = document.getElementById('chart-key').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 100, 0);
const graphData = {
  labels,
  backgroundColor: gradient,
  datasets: [
    {
      label: "A社",
      data: [65, 59, 60, 81, 56, 55],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "B社",
      data: [60, 55, 57, 61, 75, 50],
      borderColor: "rgb(75, 100, 192)",
    },
  ],
}
 */
// OK
const graphData = {
  labels,
  datasets: [
    {
      label: "A社",
      data: [65, 59, 60, 81, 56, 55],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "#EBF5FB",
    },
    {
      label: "B社",
      data: [60, 55, 57, 61, 75, 50],
      borderColor: "rgb(75, 100, 192)",
    },
  ],
}

const options = {
  maintainAspectRatio: false,
};

export const Graph: FC = () => {
  return (
    <div>
      <Line
        className="graph"
        height={300}
        width={300}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  )
}
