import React, {Component} from 'react';
import './entrance-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import entranceInfo from '../static/entrance-info';
import EntranceBox from "../components/entrance-box";
import Select from "react-styled-select";
import {Scrollbars} from 'react-custom-scrollbars';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import rooms from "../static/locations";

class EntrancePage extends Component {
    constructor(props) {
        super(props);

        let options = [];
        for (let key in rooms) {
            let temp = {};
            temp["value"] = key;
            temp["label"] = key;
            options.push(temp);
        }

        this.state = {entrances: undefined, roomValue: '', colorMat: [0, 0, 0, 0], roomOptions: options};
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.setActiveColor = this.setActiveColor.bind(this);
    }

    handleRoomChange(value) {
        this.setState({roomValue: value, colorMat: [0, 0, 0, 1]});
        this.props.setFunc(value);


    }

    componentDidMount() {
        this.setState({
            entrances: Object.keys(entranceInfo[this.props.building]).forEach((key, item) => {
                console.log(typeof key);
                console.log(entranceInfo[this.props.building][key]);
                return <EntranceBox url={entranceInfo[this.props.building][key]["img"]}
                                    name={entranceInfo[this.props.building][key]["name"]}/>
            })
        });
    }

    setActiveColor(index) {
        let mat = [0, 0, 0, 0];
        mat[index] = 1;
        this.setState({
            colorMat: mat
        });
    }

    render() {
        return (
            <div>
                <div className="entrance-page">
                    <div className="page-title">
                        Select Entrance
                    </div>

                    <div className="in-building">
                        <div className="in-building-box"
                             style={{boxShadow: `0 0 10px 5px ${this.state.colorMat[3] === 1 ? "#6293cd" : "#cdcdcd"}`}}>
                            <div className="in-building-box-title">
                                Already in this building?
                            </div>
                            <Select className="in-building-box-search" options={this.state.roomOptions}
                                    style={{touchAction: 'none'}}
                                    placeholder="Select Your Current Nearest Room" value={this.state.roomValue}
                                    onChange={this.handleRoomChange}/>
                        </div>
                    </div>

                    <div style={{marginTop: '25vh',marginLeft: '2vw', width: '100%', padding: '0 2%', boxSizing: 'border-box'}}>
                        <Scrollbars style={{height: '54vh', width: '95.3%', whiteSpace: 'nowrap'}}>
                            <div className="entrance-box-container">
                                <EntranceBox url={entranceInfo[this.props.building]["diag"]["img"]}
                                             name={entranceInfo[this.props.building]["diag"]["name"]}
                                             color={this.state.colorMat[0] === 1 ? "#6293cd" : "#cdcdcd"}
                                             setColor={this.setActiveColor} numIndex={0}
                                             setFunc={this.props.setFunc} id="diag"/>
                            </div>
                            <div className="entrance-box-container">
                                <EntranceBox url={entranceInfo[this.props.building]["dow"]["img"]}
                                             name={entranceInfo[this.props.building]["dow"]["name"]}
                                             color={this.state.colorMat[1] === 1 ? "#6293cd" : "#cdcdcd"}
                                             setColor={this.setActiveColor} numIndex={1}
                                             setFunc={this.props.setFunc} id="dow"/>
                            </div>
                            <div className="entrance-box-container">
                                <EntranceBox url={entranceInfo[this.props.building]["hayward"]["img"]}
                                             name={entranceInfo[this.props.building]["hayward"]["name"]}
                                             color={this.state.colorMat[2] === 1 ? "#6293cd" : "#cdcdcd"}
                                             setColor={this.setActiveColor} numIndex={2}
                                             setFunc={this.props.setFunc} id="hayward"/>
                            </div>
                        </Scrollbars>
                    </div>
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

        );
    }
}

EntrancePage.propTypes = {
    entrance: PropTypes.string,
};

export default EntrancePage;
