import React, { Component } from 'react'

import { Line } from 'react-chartjs-2';

export default class NewG extends Component {

    render() {
        return (
            <div style={{
                marginTop: 50,
            }}>

                <h6>Logestic Regresion:</h6>
                <Line data={{
                    labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
                    datasets: [
                        {
                            label: 'Analysis',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [0.4, 0.6, 0.7, 0.75, 0.78, 0.79, 0.81, 0.82, 0.84, 0.85, 1]
                        }
                    ]
                }} />
                <h5>Liner Regresion:</h5>
                <Line data={{
                    labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
                    datasets: [
                        {
                            label: 'Analysis',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [0, 0.2, 0.4, 0.5, 0.57, 0.63, 0.69, 0.72, 0.75, 0.76, 0.77, 1]
                        }
                    ]
                }} />
                <h5>Support Vector Machine:</h5>
                <Line data={{
                    labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
                    datasets: [
                        {
                            label: 'Analysis',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [0, 0.2, 0.4, 0.5, 0.6, 0.64, 0.69, 0.74, 0.76, 0.78, 0.79, 1]
                        }
                    ]
                }} />
                <h5>K-Means Clustring:</h5>
                <Line data={{
                    labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
                    datasets: [
                        {
                            label: 'Analysis',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [0, 0.3, 0.5, 0.57, 0.64, 0.67, 0.69, 0.71, 0.717, 0.72, 0.725, 1]
                        }
                    ]
                }} />
            </div>
        )
    }
}
