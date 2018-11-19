import React, {Component} from 'react';
import './entrance-page.css';

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
        this.state = {entrances: undefined, roomValue: ''};
        this.handleRoomChange = this.handleRoomChange.bind(this);
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

    render() {
        console.log(this.state.entrances);
        return (
            <div>
                <div className="entrance-page">
                    {/*<div className="image">*/}
                    {/*{this.state.url ? <img src={this.state.url} alt="building"/> :*/}
                    {/*<img src={"https://s3.amazonaws.com/eecs493/blue-navigator/noimage.jpg"} alt="building"/>}*/}

                    {/*</div>*/}
                    {/*<div className="intro">*/}
                    {/*{this.state.intro ? this.state.intro : "No intro available."}*/}
                    {/*</div>*/}
                    {/*<EntranceBox url={this.state.url} name={this.state.name}/>*/}
                    <EntranceBox url={entranceInfo[this.props.building]["diag"]["img"]}
                                 name={entranceInfo[this.props.building]["diag"]["name"]}/>
                    <EntranceBox url={entranceInfo[this.props.building]["dow"]["img"]}
                                 name={entranceInfo[this.props.building]["dow"]["name"]}/>
                    <EntranceBox url={entranceInfo[this.props.building]["hayward"]["img"]}
                                 name={entranceInfo[this.props.building]["hayward"]["name"]}/>
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
