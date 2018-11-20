import React, {Component} from 'react';
import './room-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import buildingInfo from '../static/building-intro-info';
import MapWithAMarker from '../components/map-with-direction';

class RoomPage extends Component {
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
        return (
            <div className="room-page">
                <div className="page-title">
                    Navigation Inside Building
                </div>
                <div className="room-box">
                    <MapWithAMarker origin="The Courtyards Student Apartments, Ann Arbor, MI"
                                    destination="Bob and Betty Beyster Building, Ann Arbor, MI"/>
                </div>
                {/*<NavBox url={this.state.url} intro={this.state.intro} name={this.state.name}/>*/}
            </div>
        );
    }
}

RoomPage.propTypes = {
    building: PropTypes.string,
};

export default RoomPage;
