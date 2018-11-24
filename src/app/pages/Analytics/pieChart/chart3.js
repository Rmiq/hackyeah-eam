import React, {Component} from "react";
import './styles.scss';

import {
    LineChart,
    Line,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    PieChart,
    Pie
} from 'recharts';

class pieChart extends Component {

    componentDidMount() {

        // fetch('https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam
        // /get-data')    .then(function (response) {        return response.json(); })
        //   .then(function (myJson) {         console.log(JSON.stringify(myJson))  });
    }
    render() {

        const data02 = [
            {
                name: 'Group A',
                value: 2400
            }, {
                name: 'Group B',
                value: 4567
            }, {
                name: 'Group C',
                value: 1398
            }, {
                name: 'Group D',
                value: 9800
            }, {
                name: 'Group E',
                value: 3908
            }, {
                name: 'Group F',
                value: 4800
            }
        ];
        return (
            <div className="analytics-heading">
                <h1>Dane analityczne</h1>
                <div className="charts-container">
                    <PieChart width={800} height={400}>
                        <Pie
                            data={data02}
                            cx={500}
                            cy={200}
                            innerRadius={40}
                            outerRadius={80}
                            fill="#82ca9d"/>
                        <Tooltip/>
                    </PieChart>
                </div>
            </div>
        )
    }
}
export default pieChart;