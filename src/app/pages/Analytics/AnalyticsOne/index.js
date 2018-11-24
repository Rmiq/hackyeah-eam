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

<<<<<<< HEAD
        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data?wojewodztwo=05";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                // console.log(JSON.stringify(myJson));
            });
    }
    render() {
=======
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
>>>>>>> 1d896dd9277a4061353d9a405e078adf395b1f2c

       return (
           <div className="analytics-heading">
               <h2>Mapa wyszukiwań szpitali</h2>
               <PlacesMap />
           </div>
       )
   }
}
export default AnalyticsOne;