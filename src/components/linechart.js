import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController,
  Tooltip,
  Legend,
  ChartDataLabels
);

const dataPoints = [null, 75, 19, 60, 71, 22, null];

const data = {
  labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', ''],
  datasets: [
    {
      label: 'My Dataset',
      data: dataPoints,
      borderColor: 'blue',
      tension: 0, // sharp lines
      fill: false,
    },
  ],
};

const maxY = Math.max(...dataPoints) + 30; // Add 2 units of top space

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: 'black',
      font: {
        weight: 'bold',
      },
      offset: 10, // distance from point
      align: (context) => {
        // Alternate position: above for even indexes, below for odd
        return context.dataIndex % 2 === 0 ? 'top' : 'bottom';
      },
      formatter: (value) => `${value}`, // Show the number
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
      max: maxY,
      grid: {
        display: true,
      },
    },
  },
};

export default function MyLineChart() {
  return <Line data={data} options={options} />;
}
