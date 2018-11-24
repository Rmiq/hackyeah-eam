import React, { Component } from "react";

import PlacesTable from "../../components/PlacesTable";
import PlacesMap from "../../components/PlacesMap";
import "./styles.scss";

class Homepage extends Component {

    render() {
        return (
            <div className="container">
                <div className="container-table">
                    <PlacesTable />
                </div>
                <div className="container-map">
                    <PlacesMap />
                </div>
            </div>
        );
    }
}

export default Homepage;