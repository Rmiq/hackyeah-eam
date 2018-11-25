import React, { Component } from "react";
import {Router, Link} from '@reach/router';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';


import "../../../../node_modules/leaflet/dist/leaflet.css"
import "./styles.scss";



class PlacesMap extends Component {

    state = {
        lat: [],
        lng: [],
        provider:[],
        locality:[],
        date:[],
        phone:[],
        address:[],
        zoom: 6
    }
handleClick(e, lat,provider, lng){
    const values={
        provider:provider,
        token:this.props.token,
        latitude:lat,
        longitude:lng
    }
    
    fetch("https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/update-data",{
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(values)
      }).then((response)=> response.json()).then((res) => this.setState({
        token:res.token
      })) 
}

componentDidMount(){
    this.setState({ 
        lat:this.props.dataPlaces.data.map(x=>x.attributes.latitude),
        lng:this.props.dataPlaces.data.map(y=>y.attributes.longitude),
        provider:this.props.dataPlaces.data.map(el=>el.attributes.provider),
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

}
    render() {
        
      
        
        // const position = [this.state.lat, this.state.lng]
        
        return (
            <div className="map-container">
      
            { <Map center={[52.12461,19.300636]} zoom={this.state.zoom}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' />
                
               
                {this.state.lat.map((el,i)=> <Marker key={i} id={i} position={[el,this.state.lng[i]]}>

                    <Popup>
                        <h2>{this.state.provider[i]}</h2>
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
                               <Button variant="contained" color="primary" onClick={(e) => {this.handleClick(e, el, this.state.provider[i],this.state.lng[i])}}> Umów wizytę </Button>
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