import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];

const AttendeeAgeChart = () => {
  const data = {
    labels,
    datasets: [
      {
        label: '18 - 24',
        data: [19, 20, 23, 21, 22, 22, 18, 20, 21, 20, 18, 19, 20, 22, 21],
        borderColor: '#4DB4FF',
        backgroundColor: '#4DB4FF',
        pointBackgroundColor: '#4DB4FF',
        pointRadius: 6,
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: '25 - 34',
        data: [28, 31, 25, 25, 28, 29, 31, 33, 32, 32, 29, 24, 33, 33, 33],
        borderColor: '#F4D548',
        backgroundColor: '#F4D548',
        pointBackgroundColor: '#F4D548',
        pointRadius: 6,
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: '35 - 44',
        data: [47, 38, 39, 41, 43, 41, 41, 41, 37, 36, 38, 36, 39, 41, 41],
        borderColor: '#EB4D4B',
        backgroundColor: '#EB4D4B',
        pointBackgroundColor: '#EB4D4B',
        pointRadius: 6,
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: '45 +',
        data: [51, 48, 51, 48, 48, 49, 49, 41, 52, 52, 48, 45, 46, 45, 45],
        borderColor: '#28B463',
        backgroundColor: '#28B463',
        pointBackgroundColor: '#28B463',
        pointRadius: 6,
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default AttendeeAgeChart;
