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

        return (
            <div className="analytics-heading">
                <h2>Mapa wyszukiwań szpitali</h2>
                <PlacesMap />
            </div>
        )
    }
}
export default AnalyticsOne;