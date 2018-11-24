import React, {Component} from "react";

import TableData from "../../components/TableData";
import PlacesMap from "../../components/PlacesMap";
import "./styles.scss";

class Homepage extends Component {

    render() {
        return (
            <div className="container">
                <TableData/>
                <div className="container-map">
                    <PlacesMap/>
                </div>
            </div>
        );
    }
}

export default Homepage;