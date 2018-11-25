import React, {Component} from "react";
import HeatMap from "../../../components/HeatMap";
import './styles.scss';


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
               <h2>Mapa wyszukiwań placówek</h2>
               <p>Mapa ciepła wskazująca placówki który były wyszukiwane najczęściej</p>
               {this.state.dataPlaces && this.state.dataPlaces.length > 0 ? <HeatMap dataPlaces={this.state.dataPlaces} /> : null}
           </div>
       )
   }
}
export default AnalyticsOne;