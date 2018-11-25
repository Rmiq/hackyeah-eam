import React, {Component} from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
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
                uv: 4000,
                pv: 2400,
                amt: 2400
            }, {
                name: 'Page B',
                uv: 3000,
                pv: 1398,
                amt: 2210
            }, {
                name: 'Page C',
                uv: 2000,
                pv: 9800,
                amt: 2290
            }, {
                name: 'Page D',
                uv: 2780,
                pv: 3908,
                amt: 2000
            }, {
                name: 'Page E',
                uv: 1890,
                pv: 4800,
                amt: 2181
            }, {
                name: 'Page F',
                uv: 2390,
                pv: 3800,
                amt: 2500
            }, {
                name: 'Page G',
                uv: 3490,
                pv: 4300,
                amt: 2100
            }
        ];

        return (
            <div className="analytics-heading">
                <h4>Wykres liniowy</h4>
                <div className="charts-container">
                <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        )
    }
}
export default AnalyticsFour;