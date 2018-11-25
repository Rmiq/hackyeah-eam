
import React, {Component} from "react";

import {
    Pie,
    PieChart,
    Tooltip,
} from 'recharts';

class UserPreferences extends Component {

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
        
        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data/most-common?criteria=preferences";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ dataPlaces: data.query }));
    }

    render() {
        return (
            <div className="analytics-heading">
                <h2>Preferencje użytkowników</h2>
                <p>Preferencje użytkowników dotyczące wyników wyszukiwania</p>
                <div className="charts-container">

                    <PieChart width={800} height={400}>
                        <Pie isAnimationActive={false} data={this.state.dataPlaces} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                        <Tooltip/>
                    </PieChart>
                </div>
            </div>
        )
    }
}
export default UserPreferences;