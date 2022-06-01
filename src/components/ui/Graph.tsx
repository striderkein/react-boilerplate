// import { ChangeEvent, useState, FC, useCallback } from "react";
// import { ChangeEvent, useState, FC } from 'react';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
import '../../index.css'

Chart.register(...registerables)

const labels: string[] = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
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
      label: "目標体重",
      data: [65, 59, 60, 81, 56, 55, 65, 59, 60, 81, 56, 55],
      // borderColor: "rgb(75, 192, 192)",
      borderColor: "#8FE9D0",
      backgroundColor: "#EBF5FB",
    },
    {
      label: "実際の体重",
      data: [60, 55, 57, 61, 75, 50, 60, 55, 57, 61, 75, 50],
      // borderColor: "rgb(75, 100, 192)",
      borderColor: "#FFCC21",
    },
  ],
}

const options = {
  maintainAspectRatio: true,
};

export const Graph: FC = () => {
  return (
    <div>
      <Line
        className="graph ha-contents"
        height={100}
        width={300}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  )
}
