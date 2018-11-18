import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';
import './searchbox.css';
import Select from "react-styled-select";

const buildingOptions = [
    {value: 'bbb', label: 'Bob and Betty Beyster Building'},
    {value: 'ggbrown', label: 'G.G.Brown'},
    {value: 'masonhall', label: 'Mason Hall'},
    {value: 'eecs', label: 'EECS Building'},
    {value: 'duder', label: 'Duderstadt Center'}
];

const roomOptions = [
    {value: '1670', label: '1670'},
    {value: '1690', label: '1690'},
    {value: '2870', label: '2870'},
    {value: '3777', label: '3777'},
    {value: '4773', label: '4773'}
];

class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.state = {buildingValue: '', roomValue: ''};

        this.handleBuildingChange = this.handleBuildingChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
    }

    handleBuildingChange(value) {
        console.log(value);
        this.setState({buildingValue: value});
    }

    handleRoomChange(value) {
        console.log(value);
        this.setState({roomValue: value});
    }

    render() {
        const {style, history} = this.props;
        return (
            <div style={style}>
                <div className="slogan">Blue Navigator</div>
                <Select className="dark-theme search-building" options={buildingOptions}
                        placeholder="Select Your Building" value={this.state.buildingValue}
                        onChange={this.handleBuildingChange}/>
                <Select className="dark-theme search-room" options={roomOptions}
                        placeholder="Select Your Room"
                        value={this.state.roomValue} onChange={this.handleRoomChange}/>
                <FontAwesomeIcon className="search" icon={faArrowCircleRight} size="lg" onClick={
                    (e) => {
                        e.preventDefault();
                        history.push(`/search?q=${encodeURIComponent(this.state.buildingValue + this.state.roomValue)}`);
                    }
                }/>
            </div>
        );
    }
}

export default withRouter(Searchbox);
