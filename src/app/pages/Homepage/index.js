import React, {Component} from "react";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import TableData from "../../components/TableData";
import "../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.scss";

class Homepage extends Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="container">
                <TableData/>
                <div className="container-map">
                    <Map center={position} zoom={this.state.zoom}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup.
                                <br/>
                                Easily customizable.
                            </Popup>
                        </Marker>
                    </Map>

                </div>
            </div>
        );
    }
}

export default Homepage;