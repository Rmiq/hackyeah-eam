import React, { Component } from "react";

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';
import HeatmapLayer from "../../../../node_modules/react-leaflet-heatmap-layer"
import "../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.scss";

class HeatMap extends Component {

    state = {
        zoom: 14,
        points: []
    }

    componentDidMount() {
        this.setState({
            points: this.props.dataPlaces
            
        })

    }
    render() {

        return (
            <div className="map-container">
                <Map center={[52.12461, 19.300636]} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' />
                      <HeatmapLayer
                        fitBoundsOnUpdate
                        points={this.state.points}
                        longitudeExtractor={m => m[1]}
                        latitudeExtractor={m => m[0]}
                        intensityExtractor={m => parseFloat(m[2])} />
                </Map>
            </div>

        );
    }
}

export default HeatMap;