import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
export default class LineG extends Component {

    getNum = () => {
        let tnumber = [];
        for (let i = 1; i <= this.props.number; i++) {
            tnumber.push(`Tweet ${i}`);
        }
        return tnumber
    }

    render() {
        return (
            <div style={{
                marginTop: 50,
            }}>

                <Typography variant="h6" align="center" style={{
                    marginBottom: 50
                }}>Overall Trend Along Tweets:</Typography>
                <Line data={{
                    labels: this.getNum(),
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
                            data: this.props.linedata
                        }
                    ]
                }} />
            </div>
        )
    }
}
