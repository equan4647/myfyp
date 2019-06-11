import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class Chart extends Component {


    render() {

        return (
            <React.Fragment>

                {/* <h2>{this.props.Name}</h2> */}
                <Doughnut data={{
                    labels: [
                        'Toxic',
                        'Safe'
                    ],
                    datasets: [{
                        data: [this.props.toxic, this.props.safe],
                        backgroundColor: [
                            '#FF0000',
                            '#008000'

                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#32CD32',
                        ]
                    }]
                }} width={this.props.w}
                    height={this.props.h} />

            </React.Fragment>

        );
    }
};