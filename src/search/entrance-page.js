import React, {Component} from 'react';
import './entrance-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import entranceInfo from '../static/entrance-info';
import EntranceBox from "../components/entrance-box";
import Select from "react-styled-select";


const roomOptions = [
    {value: '1670', label: '1670'},
    {value: '1690', label: '1690'},
    {value: '2870', label: '2870'},
    {value: '3777', label: '3777'},
    {value: '4773', label: '4773'}
];

class EntrancePage extends Component {
    constructor(props) {
        super(props);
        this.state = {entrances: undefined, roomValue: '', colorMat: [0, 0, 0]};
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.setActiveColor = this.setActiveColor.bind(this);
    }

    handleRoomChange(value) {
        this.setState({roomValue: value});
    }

    componentDidMount() {
        this.setState({
            // url: entranceInfo[this.props.building] ? entranceInfo[this.props.building].img : "",
            // name: entranceInfo[this.props.building] ? entranceInfo[this.props.building].name : "",
            entrances: Object.keys(entranceInfo[this.props.building]).forEach((key, item) => {
                console.log(typeof key);
                console.log(entranceInfo[this.props.building][key]);
                return <EntranceBox url={entranceInfo[this.props.building][key]["img"]}
                                    name={entranceInfo[this.props.building][key]["name"]}/>
            })
        });
    }

    setActiveColor(index) {
        let mat = [0, 0, 0];
        mat[index] = 1;
        this.setState({
            colorMat: mat
        });
    }

    render() {
        console.log(this.state.entrances);
        return (
            <div>
                <div className="entrance-page">
                    <div className="page-title">
                        Select your Entrance
                    </div>
                    <div style={{overflowX: "auto"}}>
                        <EntranceBox url={entranceInfo[this.props.building]["diag"]["img"]}
                                     name={entranceInfo[this.props.building]["diag"]["name"]}
                                     color={this.state.colorMat[0] === 1 ? "#6293cd" : "#cdcdcd"}
                                     setColor={this.setActiveColor} numIndex={0}
                                     setFunc={this.props.setFunc} id="diag"/>
                        <EntranceBox url={entranceInfo[this.props.building]["dow"]["img"]}
                                     name={entranceInfo[this.props.building]["dow"]["name"]}
                                     color={this.state.colorMat[1] === 1 ? "#6293cd" : "#cdcdcd"}
                                     setColor={this.setActiveColor} numIndex={1}
                                     setFunc={this.props.setFunc} id="dow"/>
                        <EntranceBox url={entranceInfo[this.props.building]["hayward"]["img"]}
                                     name={entranceInfo[this.props.building]["hayward"]["name"]}
                                     color={this.state.colorMat[2] === 1 ? "#6293cd" : "#cdcdcd"}
                                     setColor={this.setActiveColor} numIndex={2}
                                     setFunc={this.props.setFunc} id="hayward"/>
                    </div>
                </div>
                <div className="in-building">
                    <div className="in-building-box">
                        <div className="in-building-box-title">
                            Already in this building?
                        </div>
                        <Select className="in-building-box-search" options={roomOptions}
                                placeholder="Select Your Current Nearest Room" value={this.state.roomValue}
                                onChange={this.handleRoomChange}/>
                    </div>
                </div>
            </div>

        );
    }
}

EntrancePage.propTypes = {
    entrance: PropTypes.string,
};

export default EntrancePage;
