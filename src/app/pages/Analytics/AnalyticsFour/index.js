import React, {Component} from "react";
import './styles.scss';

import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, CartesianGrid,
} from 'recharts';

class AnalyticsFour extends Component {

    componentDidMount() {

        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data/region-activities";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ dataPlaces: data.body }));

    }

    constructor(props) {
        super(props);
        this.state = {
          dataPlaces: []
        }
    }

    render() {
<<<<<<< HEAD
=======
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
>>>>>>> 81a4fc99d43c28f63899148a822ba93388e73ba0

        return (
            <div className="analytics-heading">
                <h2>Aktywność województw</h2>
                <p>Statystyka pokazująca aktywnosc danych województw oraz liczbe wizyt porzuconych</p>
                <div className="charts-container">
                <BarChart width={800} height={300} data={this.state.dataPlaces} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="wojewodztwo"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
<<<<<<< HEAD
                    <Bar dataKey="zapytania" name="Porzucone" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="sfinalizowane" name="Umówione" stackId="a" fill="#8884d8" />
=======
                    <Bar dataKey="pv" fill="#8884d8" />
>>>>>>> 81a4fc99d43c28f63899148a822ba93388e73ba0
                </BarChart>
                <div className="chart-legend"> 
                    <h4> Legenda: </h4>
                    <p> 00 - Cała Polska</p>
                    <p> 01 - Dolnośląskie</p>
                    <p> 02 - Kujawsko-pomorskie</p>
                    <p> 03 - Lubelskie</p>
                    <p> 04 - Lubuskie</p>
                    <p> 05 - Łódzkie</p>
                    <p> 06 - Małopolskie</p>
                    <p> 07 - Mazowieckie</p>
                    <p> 08 - Opolskie</p>
                    <p> 09 - Podkarpackie</p>
                    <p> 10 - Podlaskie</p>
                    <p> 11 - Pomorskie</p>
                    <p> 12 - Śląskie</p>
                    <p> 13 - Świętokrzyskie</p>
                    <p> 14 - Warmińsko-mazurskie</p>
                    <p> 15 - Wielkopolskie</p>
                    <p> 16 - Zachodnio-pomorskie</p>       
                </div>
                </div>
            </div>
        )
    }
}
export default AnalyticsFour;