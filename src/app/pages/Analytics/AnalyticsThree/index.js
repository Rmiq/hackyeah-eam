import React, {Component} from "react";
import './styles.scss';

import {
    PieChart,
    Pie,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

class AnalyticsThree extends Component {

    componentDidMount() {
        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data?wojewodztwo=05";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });
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
        const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
              {name: 'Page B', uv: 868, pv: 967, amt: 1506},
              {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
              {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
              {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
              {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];
        return (
            <div className="analytics-heading">
                <h4>Porzucone rezerwacje</h4>
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
                    <ComposedChart width={600} height={400} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                        <CartesianGrid stroke='#f5f5f5'/>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
                        <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
                    </ComposedChart>
                </div>
            </div>
        )
    }
}
export default AnalyticsThree;