import React, {Component} from 'react';
import './nav-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import buildingInfo from '../static/building-intro-info';
import MapWithADirectionsRenderer from '../components/map-with-direction';
import {geolocated} from 'react-geolocated';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

class NavPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({
            url: buildingInfo[this.props.building] ? buildingInfo[this.props.building].img : "",
            intro: buildingInfo[this.props.building] ? buildingInfo[this.props.building].intro : "",
            name: buildingInfo[this.props.building] ? buildingInfo[this.props.building].name : ""
        });
    }

    render() {
        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                    ? <div className="nav-page">
                        <div className="page-title">
                            Navigation to Building
                        </div>
                        <div className="nav-box">
                            <MapWithADirectionsRenderer originLat={this.props.coords.latitude}
                                                        originLong={this.props.coords.longitude}
                                                        destination="Bob and Betty Beyster Building, Ann Arbor, MI"/>
                        </div>
                        <FontAwesomeIcon
                            className="next-icon" icon={faAngleDoubleDown} size="5x"
                            // onMouseOver={
                            //     (e) => {
                            //         e.preventDefault();
                            //     }
                            // }
                        />
                    </div>
                    : <div>Getting the location data&hellip; </div>;
    }
}

NavPage.propTypes = {
    building: PropTypes.string,
};

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(NavPage);
