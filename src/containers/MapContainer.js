import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
    width: '100%',
    height: '100%'
}

class MapContainer extends React.Component {


    render() {
        return(
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.props.lat, lng: this.props.long}}
            >

            <Marker 
                position={{ lat: this.props.lat, lng: this.props.long}}
            />

            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDsNqn-PIIbp4oRlN7vKz7bE3QJjNr4S-w'),
})(MapContainer)