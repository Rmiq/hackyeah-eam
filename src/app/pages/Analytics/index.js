import React, {Component} from "react";
import './styles.scss';
import { LineChart, Line } from 'recharts';

class Analytics extends Component {

    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        // fetch('https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data')
        // .then(results => {
        //     return results.json();
        // }).then(data => {
        //     console.log(data);
        // })
        console.log('test');
        fetch('https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data')
           .then(function (response) {
               return response.json();
           })
           .then(function (myJson) {
               console.log(JSON.stringify(myJson));
           });
    }
    render() {
        return null;
        return (

            <div className="analytics-heading">
                <h1>Dane analityczne</h1>
                <div className="charts-container">
                    {/* <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    </LineChart> */}
                </div>
            </div>
        )
    }
}
export default Analytics;