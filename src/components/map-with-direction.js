/* global google */

import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} from 'react-google-maps';

import { compose, withProps, lifecycle } from "recompose";

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyD_qZh1iBFy78OO-3HurqRNWD97W2eTzvM&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: new google.maps.LatLng(this.props.originLat, this.props.originLong),
                destination: this.props.destination,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                    console.log(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={new google.maps.LatLng(42.28, -83.73)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
);

export default MapWithADirectionsRenderer;