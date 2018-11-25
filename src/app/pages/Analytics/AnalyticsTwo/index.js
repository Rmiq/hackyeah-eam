import React, {Component} from "react";

import {
    Pie,
    PieChart,
    Tooltip,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
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
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      ];
        return (
            <div className="analytics-heading">
                <h4>Najczesciej szukane uslugi</h4>
                <div className="charts-container">
                {this.state.dataPlaces != null && console.log(this.state.dataPlaces)}
                    {console.log( this.state.dataPlaces ? this.state.dataPlaces : null)}
                    <PieChart width={800} height={400}>
                        <Pie isAnimationActive={false} data={this.state.dataPlaces} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                        <Tooltip/>
                    </PieChart>
                    <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                    </AreaChart>
                </div>
            </div>
        )
    }
}
export default AnalyticsTwo;