import React, {Component} from "react";
import HeatMap from "../../../components/HeatMap";
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

        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data/finalized-transaction";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ dataPlaces: data.query }));
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
               {this.state.dataPlaces && this.state.dataPlaces.length > 0 ? <HeatMap dataPlaces={this.state.dataPlaces} /> : null}
           </div>
       )
   }
}
export default AnalyticsOne;