import React, {Component} from "react";
import './styles.scss';
import {Router, Link} from "@reach/router";
import LineChartPage from "./LineChartPage";
import barChart from "../Analytics";
import pieChart from "../Analytics";
class Analytics extends Component {

    componentDidMount() {

        fetch('https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson))
            });
    }
    render() {

        return (
            <div className="analytics-heading">
                <h1>Dane analityczne</h1>
                <p>Kliknij w jedną z poniszych kategorii aby sprawidzić jej statystyki</p>
                <div className="analyticsSidebar">
                    <ul>
                        <Link to="linechart">Chart pierwszy</Link>
                        <Link to="barchart">Chart drugi</Link>
                        <Link to="piechart">Chart trzeci</Link>
                    </ul>
                </div>
                <div>
                    <Router>
                        <LineChartPage path="linechart"></LineChartPage>
                        <barChart path="barchart"></barChart>
                        <pieChart path="piechart"></pieChart>
                    </Router>
                </div>
                {/* <div className="charts-container">
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    </LineChart>
                    <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                    <PieChart width={800} height={400}>
                        <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
                            <Tooltip/>
                        </PieChart>
                </div> */}
            </div>
        )
    }
}
export default Analytics;