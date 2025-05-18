import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,  
  ScatterController,  
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';

// Register Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,   
  ScatterController,  
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];

const colors = {
  '18 - 24': '#4DB4FF',
  '25 - 34': '#F4D548',
  '35 - 44': '#EB4D4B',
  '45 +': '#28B463',
};

const ageGroups = {
  '18 - 24': [19, 20, null, 21, 22, 22, 18, 20, 21, 20, 18, 19, null, 22, 21],
  '25 - 34': [28, null, 25, 25, null, 29, 31, 33, 32, null, 29, 24, 33, 33, 33],
  '35 - 44': [47, 38, 39, null, 43, 41, 41, 41, 37, 36, 38, 36, 39, 41, 41],
  '45 +': [51, 48, 51, 48, 48, 49, 49, 41, 52, null, 48, 45, 46, 45, 45],
};

// Bar lines
const barDatasets = Object.keys(ageGroups).map((group) => ({
  type: 'bar',
  label: group,
  data: ageGroups[group],
  backgroundColor: colors[group],
  borderColor: colors[group],
  borderWidth: 2,
  barThickness: 4,
}));

// Scatter points with labels inside
const scatterDatasets = Object.keys(ageGroups).map((group) => ({
  type: 'scatter',
  label: `${group} points`,
  data: ageGroups[group].map((y, i) => ({ x: labels[i], y })),
  backgroundColor: colors[group],
  pointRadius: 14,
  datalabels: {
    anchor: 'center',
    align: 'center',
    color: '#fff',
    font: {
      weight: 'bold',
    },
    formatter: (value) => value.y,
  },
  showLine: false,
}));

const data = {
  labels,
  datasets: [...barDatasets, ...scatterDatasets],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: (context) => context.dataset.type === 'scatter',
    },
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
        filter: (item) => !item.text.includes('points'),
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      ticks: { stepSize: 10 },
    },
  },
};

const AttendeeAgeChart = () => (
  <div style={{ width: '100%', height: '400px' }}>
    <Chart type='bar' data={data} options={options} plugins={[ChartDataLabels]} />
  </div>
);

export default AttendeeAgeChart;
