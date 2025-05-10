import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AttendeeLocationsChart = () => {
  const data = {
    labels: ['', '', '', '', '', ''], // Blank labels to hide the x-axis titles
    datasets: [
      {
        label: 'Attendees',
        data: [227, 123, 52, 70, 143],
        backgroundColor: ['#007bff', '#e74c3c', '#27ae60', '#f4c542', '#c039b4'],
        borderRadius: 8,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const total = context.chart._metasets[0].total || 615;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={data} options={options} />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        <BarStat number={227} percent="36.9%" color="#007bff" />
        <BarStat number={123} percent="20.0%" color="#e74c3c" />
        <BarStat number={52} percent="8.5%" color="#27ae60" />
        <BarStat number={70} percent="11.4%" color="#f4c542" />
        <BarStat number={143} percent="23.3%" color="#c039b4" />
      </div>
    </div>
  );
};

const BarStat = ({ number, percent, color }) => (
  <div style={{ textAlign: 'center', fontSize: '14px' }}>
    <strong style={{ color }}>{number}</strong>
    <div style={{ color: '#555', fontWeight: 500 }}>{percent}</div>
  </div>
);

export default AttendeeLocationsChart;
