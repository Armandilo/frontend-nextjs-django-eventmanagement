'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface SalesData {
  month: string;
  sales: number;
}

const salesData: SalesData[] = [
  { month: "January", sales: 100 },
  { month: "February", sales: 150 },
  { month: "March", sales: 200 },
  { month: "April", sales: 120 },
  { month: "May", sales: 180 },
  { month: "June", sales: 250 },
];

const LineChart = () => {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#4338ca",
        borderWidth: 1,
        pointStyle: false,
        tension: 0,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#4338ca");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true, // Keep aspect ratio but fit to container
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
            weight: 'normal',
          },
        },
        border: {
          dash: [5,5],
          display: true,
        },
        grid: {
          display: true,
          z: 1,
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
            weight: 'normal',
          },
        },
        grid: {
          display: false, // Remove x-axis gridlines
        },
      },
    },
  };

  return (
    <div className="w-full max-h-[400px]">
      <h1 className="text-[18px] font-bold mb-2">Daily Views</h1>
      <div className='flex flex-row gap-7 mb-6'>
        <div>
          <p className='text-sm text-gray-500 font-light'>Daily</p>
          <p className='text-lg text-gray-800 font-semibold'>+24,789</p>
        </div>
        <div>
          <p className='text-sm text-gray-500 font-light'>Total</p>
          <p className='text-lg text-gray-800 font-semibold'>8,897,856</p>
        </div>
      </div>
      <div className="w-full h-[400px]"> {/* Adjust height here if needed */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
