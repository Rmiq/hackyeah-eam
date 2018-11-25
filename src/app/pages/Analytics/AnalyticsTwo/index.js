import React, {Component} from "react";

import {
    Pie,
    PieChart,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Cell
} from 'recharts';

class AnalyticsTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dataPlaces: '',
          data01: [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]
        }
    }
    
    componentDidMount() {
        
        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data/most-common?criteria=benefit";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ dataPlaces: data.query }));
    }

    render() {
        const COLORS = ['#d50000', '#039be5','#00c853','#ff7043','#fff176','#18ffff','#00e676','#ff9100','#7b1fa2','#7cb342'];
        return (
            <div className="analytics-heading">
                <h2>Najczęściej szukane usługi</h2>
                <p>Która z usług cieszyła się największą popularnością</p>
                <div className="charts-container">
                    <PieChart width={800} height={400}>
                        <Pie isAnimationActive={false} data={this.state.dataPlaces} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
                        {Object.keys(this.state.dataPlaces).map((entry,index)=><Cell fill={COLORS[index % COLORS.length]}/>)}
                        </Pie>
                        <Tooltip/>
                    </PieChart>
                    <BarChart width={600} height={300} data={this.state.dataPlaces} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="value" name="singleBar" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        )
    }
}
export default AnalyticsTwo;