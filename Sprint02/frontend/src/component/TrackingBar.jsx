import React from "react";
import './TrackingBar.css';
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const TrackBar = () => {
const activityData = {
    labels: ['Walk', 'Run', 'Swim', 'Hike', 'Bike'],
    datasets: [
      {
        label: 'Times of activity: ',
        data: [4, 3, 1, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const weightData = {
    labels: [1,2,3,4,5,6],
    datasets: [
      {
        label: 'weight',
        data: [110, 105, 98, 90, 88, 80],
        borderWidth: 1,
      },
    ],
  };

    return(
        <div className="track-box">
            <div className="quick-box">
                <h2>You are inactivity</h2>
                <div className="timer">00:00:00</div>
                <button>Quick Start</button>
            </div>
            <div className="graph-activities-box">
                <Doughnut 
                data={activityData}
                width={300}
                height={300}
                options={{ maintainAspectRatio: false }} 
                />
            </div>
            <div className="graph-BMI-box">
                <Line 
                data={weightData}
                width={350}
                height={250}
                options={{ maintainAspectRatio: false }}
                 />
            </div>
        </div>
    )
}

export default TrackBar