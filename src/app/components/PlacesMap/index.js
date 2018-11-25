import React, { Component } from "react";

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';
import "../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.scss";

class PlacesMap extends Component {

    state = {
        lat: [],
        lng: [],
        place:[],
        locality:[],
        date:[],
        phone:[],
        address:[],
        testPos: 40,
        zoom: 6
    }
    
componentDidMount(){
    this.setState({ 
        lat:this.props.dataPlaces.data.map(x=>x.attributes.latitude),
        lng:this.props.dataPlaces.data.map(y=>y.attributes.longitude),
        place:this.props.dataPlaces.data.map(el=>el.attributes.place),
        locality:this.props.dataPlaces.data.map(el=>el.attributes.locality),
        date:this.props.dataPlaces.data.map(el=>el.attributes.dates.date),
        phone:this.props.dataPlaces.data.map(el=>el.attributes.phone),
        address:this.props.dataPlaces.data.map(el=>el.attributes.address)
    })
    
//    this.setState(prevState => ({
//        position: {
           
//            lat: [...prevState.lat,this.props.lati.data]
//        }
//    }))
// this.setState({position: [...this.state.position, this.props.lati.data]})

console.log(this.state.testPos)
}
    render() {
        
      
        
        // const position = [this.state.lat, this.state.lng]
        
        return (
            <div className="map-container">
      
            { <Map center={[52.12461,19.300636]} zoom={this.state.zoom}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' />
                
                {this.state.lat.map((el, i)=> console.log(el,this.state.lng[i]))}
                {this.state.lat.map((el,i)=> <Marker position={[el,this.state.lng[i]]}>
                    <Popup>
                        <h2>{this.state.place[i]}</h2>
                        <p>{this.state.locality[i]}</p>
                        <p>{this.state.address[i]}</p>
                        <div className="submit-container">
                            <div>
                                <ul>
                                    <li>Pierwszy termin: {this.state.date[i]}</li>
                                    <li>Telefon: {this.state.phone[i]}</li>
                                </ul>

                            </div>
                            <div>
                                <Button variant="contained" color="primary"> Umów wizytę </Button>
                            </div>
                        </div>
                        

                    </Popup>
                </Marker>)}
            </Map>}
            </div>

        );
    }
}

export default PlacesMap;