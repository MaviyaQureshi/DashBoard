import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../CSS/DashBoard.css'

ChartJS.register(ArcElement, Tooltip);

export const data = {

    datasets: [
        {
            label: ['hi'],
            data: [100],
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

console.log(data.datasets[0].label)


const DashBoard = () => {
    return (
        <>
            <span className="DashBoard-container">
                <div className="dashboard">

                    <Pie data={data} />
                </div>
            </span>

        </>
    )
}

export default DashBoard