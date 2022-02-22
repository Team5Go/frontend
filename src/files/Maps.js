import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { Descriptions } from 'antd';
import '../App.css'

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


Geocode.setApiKey("AIzaSyC435gMapIIH15qYrjJAOoFouHDI9Jwvyk");
Geocode.enableDebug();

class Maps extends React.Component {

    state = {
        address: '19 Stonegate Center,',
        city: 'Valley Park,',
        area: '63088',
        state: 'MO',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 38.56695835309254,
            lng: -90.49463348651621,
        },
        markerPosition: {
            lat: 38.56695835309254,
            lng: -90.49463348651621,
        }
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (
    //         this.state.markerPosition.lat !== this.state.center.lat ||
    //         this.state.address !== nextState.address ||
    //         this.state.city !== nextState.city ||
    //         this.state.area !== nextState.area ||
    //         this.state.state !== nextState.state
    //     ) {
    //         return true
    //     } else if (this.state.mapPosition.lat === nextState.mapPosition.lat) {
    //         return false
    //     }
    // }

    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onInfoWindowClose = (event) => { };

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)

        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };


    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap
                        defaultZoom={this.state.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}>

                        <Marker
                            google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>
                        <Marker />

                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '2rem'
                            }}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                        />
                    </GoogleMap>
                )
            )
        );

        return (
            <div className='m-b-50 m-t-20 m-l-r-auto' style={{ padding: '1rem', maxWidth: 1000 }}>
                
                <Descriptions bordered>
                <Descriptions.Item label="Address"  className='p-l-15 p-r-15'>{this.state.address}</Descriptions.Item>
                    <Descriptions.Item label="City" className=' t-center p-t-10 p-b-10 t-center p-l-15 p-r-15'>{this.state.city}</Descriptions.Item>
                    <Descriptions.Item label="State" className=' t-center  p-r-15'>{this.state.state}</Descriptions.Item>
                    <Descriptions.Item label="Area" className=' t-center p-l-15 p-r-15'>{this.state.area}</Descriptions.Item>
                    
                </Descriptions>

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC435gMapIIH15qYrjJAOoFouHDI9Jwvyk&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        )
    }

}

export default Maps;