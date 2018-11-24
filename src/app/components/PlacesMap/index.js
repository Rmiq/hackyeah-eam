import React, { Component } from "react";

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';
import "../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.scss";

class PlacesMap extends Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (

            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' />
                <Marker position={position}>
                    <Popup>
                        <h2>Provider Name</h2>
                        <p>Locality, address</p>
                        <div className="submit-container">
                            <div>
                                <p>First visit:</p>
                                <ul>
                                    <li>2018-11-12</li>
                                </ul>

                            </div>
                            <div>
                                <Button variant="contained" color="primary"> Umów wizytę </Button>
                            </div>
                        </div>
                        

                    </Popup>
                </Marker>
            </Map>

        );
    }
}

export default PlacesMap;