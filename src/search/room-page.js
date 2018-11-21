import React, {Component} from 'react';
import './room-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import buildingInfo from '../static/building-intro-info';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import roomInfo from '../static/locations';

const styles = {
    tabs: {
        background: "#fff"
    },
    slide: {
        padding: 15,
        minHeight: "60vh",
        color: "#fff"
    },
    slide1: {},
    slide2: {}
};

class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({
            index: value
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index
        });
    };

    componentDidMount() {
        this.setState({
            url: buildingInfo[this.props.building] ? buildingInfo[this.props.building].img : "",
            intro: buildingInfo[this.props.building] ? buildingInfo[this.props.building].intro : "",
            name: buildingInfo[this.props.building] ? buildingInfo[this.props.building].name : ""
        });
    }

    render() {
        const {index} = this.state;
        if (this.props.curFloor != this.props.destFloor) {
            return (
                <div className="room-page">
                    <div className="page-title">
                        Navigation Inside Building
                    </div>
                    <div className="room-box">
                        <Tabs
                            value={index}
                            fullWidth
                            onChange={this.handleChange}
                            style={styles.tabs}
                        >
                            <Tab label="Floor 1"/>
                            <Tab label="Floor 2"/>
                        </Tabs>
                        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}
                                        slideStyle={{height: '60vh'}}>
                            <div style={Object.assign({}, styles.slide, styles.slide1)}>
                                <div style={{position: "relative"}}>
                                    <div style={{
                                        position: 'absolute',
                                        width: '66.7vh',
                                        height: '50vh',
                                        top: 0,
                                        left: '50%',
                                        transform: 'translate(-50%,0)'
                                    }}>
                                        <img className="room-image"
                                             style={{
                                                 position: "absolute",
                                                 width: '100%',
                                                 height: '100%',
                                                 top: 0,
                                                 left: 0
                                             }}
                                             src={`https://s3.amazonaws.com/eecs493/blue-navigator/floor_plans/floor_${this.props.curFloor}.png`}
                                        />
                                        <img
                                            style={{
                                                position: "absolute",
                                                left: `${100 * roomInfo[this.props.curRoom]["x_loc"] / 1440}%`,
                                                top: `${100 * roomInfo[this.props.curRoom]["y_loc"] / 1080}%`,
                                                transform: 'translate(-50%,-90%)'
                                            }}
                                            src="https://s3.amazonaws.com/eecs493/blue-navigator/marks/start.png"/>
                                        <img
                                            style={{
                                                position: "absolute",
                                                left: `${100 * roomInfo[this.props.curStair]["x_loc"] / 1440}%`,
                                                top: `${100 * roomInfo[this.props.curStair]["y_loc"] / 1080}%`,
                                                transform: 'translate(-50%,-90%)'
                                            }}
                                            src="https://s3.amazonaws.com/eecs493/blue-navigator/marks/goal.png"/>
                                    </div>

                                </div>

                            </div>
                            <div style={Object.assign({}, styles.slide, styles.slide2)}>
                                <div style={{position: "relative"}}>
                                    <div style={{
                                        position: 'absolute',
                                        width: '66.7vh',
                                        height: '50vh',
                                        top: 0,
                                        left: '50%',
                                        transform: 'translate(-50%,0)'
                                    }}>
                                        <img className="room-image"
                                             style={{
                                                 position: "absolute",
                                                 width: '100%',
                                                 height: '100%',
                                                 top: 0,
                                                 left: 0
                                             }}
                                             src={`https://s3.amazonaws.com/eecs493/blue-navigator/floor_plans/floor_${this.props.destFloor}.png`}
                                        />
                                        <img
                                            style={{
                                                position: "absolute",
                                                left: `${100 * roomInfo[this.props.destStair]["x_loc"] / 1440}%`,
                                                top: `${100 * roomInfo[this.props.destStair]["y_loc"] / 1080}%`,
                                                transform: 'translate(-50%,-90%)'
                                            }}
                                            src="https://s3.amazonaws.com/eecs493/blue-navigator/marks/start.png"/>
                                        <img
                                            style={{
                                                position: "absolute",
                                                left: `${100 * roomInfo[this.props.destRoom]["x_loc"] / 1440}%`,
                                                top: `${100 * roomInfo[this.props.destRoom]["y_loc"] / 1080}%`,
                                                transform: 'translate(-50%,-90%)'
                                            }}
                                            src="https://s3.amazonaws.com/eecs493/blue-navigator/marks/goal.png"/>
                                    </div>

                                </div>

                            </div>
                        </SwipeableViews>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="room-page">
                    <div className="page-title">
                        Navigation Inside Building
                    </div>
                    <div className="room-box">
                        <Tabs
                            value={index}
                            fullWidth
                            onChange={this.handleChange}
                            style={styles.tabs}
                        >
                            <Tab label="Floor 1"/>
                        </Tabs>
                        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}
                                        slideStyle={{height: '60vh'}}>
                            <div style={Object.assign({}, styles.slide, styles.slide1)}>
                                <div style={{position: "relative"}}>
                                    <div style={{
                                        position: 'absolute',
                                        width: '66.7vh',
                                        height: '50vh',
                                        top: 0,
                                        left: '50%',
                                        transform: 'translate(-50%,0)'
                                    }}>
                                        <img className="room-image"
                                             style={{
                                                 position: "absolute",
                                                 width: '100%',
                                                 height: '100%',
                                                 top: 0,
                                                 left: 0
                                             }}
                                             src={`https://s3.amazonaws.com/eecs493/blue-navigator/floor_plans/floor_${this.props.curFloor}.png`}
                                        />
                                        <img
                                            style={{
                                                position: "absolute",
                                                left: `${100 * roomInfo[this.props.curRoom]["x_loc"] / 1440}%`,
                                                top: `${100 * roomInfo[this.props.curRoom]["y_loc"] / 1080}%`,
                                                transform: 'translate(-50%,-90%)'
                                            }}
                                            src="https://s3.amazonaws.com/eecs493/blue-navigator/marks/start.png"/>
                                        <img
                                            style={{
                                                position: "absolute",
                                                left: `${100 * roomInfo[this.props.destRoom]["x_loc"] / 1440}%`,
                                                top: `${100 * roomInfo[this.props.destRoom]["y_loc"] / 1080}%`,
                                                transform: 'translate(-50%,-90%)'
                                            }}
                                            src="https://s3.amazonaws.com/eecs493/blue-navigator/marks/goal.png"/>
                                    </div>

                                </div>

                            </div>

                        </SwipeableViews>
                    </div>
                </div>
            );
        }
    }
}

RoomPage.propTypes = {
    curFloor: PropTypes.number,
    destFloor: PropTypes.number,
    curRoom: PropTypes.string,
    destRoom: PropTypes.string,
    curStair: PropTypes.string,
    destStair: PropTypes.string
};

export default RoomPage;
