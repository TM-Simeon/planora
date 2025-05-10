import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const AttendeeInterestChart = () => {
  const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  const values = [12, 19, 3, 5, 2, 7];

  const data = {
    labels,
    datasets: [
      {
        label: 'Votes',
        data: values,
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
      },
    ],
  };

  const total = values.reduce((a, b) => a + b, 0);

  const options = {
    plugins: {
      datalabels: {
        color: '#000',
        formatter: (value, context) => {
          const percentage = ((value / total) * 100).toFixed(1) + '%';
          return `${value} (${percentage})`;
        },
        anchor: 'center',
        align: 'center',
        offset: 10,
        font: {
          weight: 'bold'
        }
      },
      legend: {
        display: false, // Keep using your custom legend
      },
    },
  };

  // Split into two columns
  const midpoint = Math.ceil(labels.length / 2);
  const col1 = labels.slice(0, midpoint);
  const col2 = labels.slice(midpoint);

  return (
    <div>
      <Doughnut data={data} options={options} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ marginRight: '40px' }}>
          {col1.map((label, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: data.datasets[0].backgroundColor[i],
                marginRight: '8px'
              }}></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div>
          {col2.map((label, i) => (
            <div key={i + midpoint} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: data.datasets[0].backgroundColor[i + midpoint],
                marginRight: '8px'
              }}></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendeeInterestChart;
