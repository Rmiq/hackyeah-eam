import React, { Component } from "react";

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';
import "../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.scss";

class PlacesMap extends Component {

    state = {
        lat:[],
        lng: [],
        zoom: 5
    }
    
componentWillMount(){
    this.props.lati&& this.props.lati.data.map(x=>
            
        this.setState({
            lat:x.attributes.latitude
        })
    )
    this.props.long&&this.props.long.data.map(y=>
        this.setState({
            lng:y.attributes.latitude
        })
    )
}
    render() {
        
      
        
        const position = [this.state.lat, this.state.lng]
        console.log(this.state.lat)
        return (
            <div className="map-container">
            {console.log('position',position)}
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
            </div>

        );
    }
}

export default PlacesMap;