import React, {Component} from "react";
import PlacesMap from "../../../components/PlacesMap";
import './styles.scss';

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    Legend
} from 'recharts';

class AnalyticsOne extends Component {

    componentDidMount() {

        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data?isFinalized=true;";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ dataPlaces: data }));
    }

    constructor(props) {
        super(props);
        this.state = {
          dataPlaces: []
        }
    }

    render() {
        return (
            <div className="analytics-heading">
                <h2>Mapa wyszukiwań szpitali</h2>
                <PlacesMap />
                {console.log(this.state.dataPlaces)}
            </div>
        )   
    }
}
export default AnalyticsOne;