import React, {Component} from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, CartesianGrid,
} from 'recharts';

class AnalyticsFour extends Component {

    componentDidMount() {
        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data/most-common?criteria=benefit";
       fetch(url)
           .then(function (response) {
               return response.json();
           })
           .then(function (myJson) {
               console.log(JSON.stringify(myJson));
           });
    }
    render() {
        const data = [
            {
                name: 'Page A',
                pv: 2400,
                amt: 2400
            }, {
                name: 'Page B',
                pv: 1398,
                amt: 2210
            }, {
                name: 'Page C',
                pv: 9800,
                amt: 2290
            }, {
                name: 'Page D',
                pv: 3908,
                amt: 2000
            }, {
                name: 'Page E',
                pv: 4800,
                amt: 2181
            }, {
                name: 'Page F',
                pv: 3800,
                amt: 2500
            }, {
                name: 'Page G',
                pv: 4300,
                amt: 2100
            }
        ];

        return (
            <div className="analytics-heading">
                <h4>Aktywnosc wojewodztw</h4>
                <div className="charts-container">
                <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
                <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                    <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                    <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
                </AreaChart>
                </div>
            </div>
        )
    }
}
export default AnalyticsFour;