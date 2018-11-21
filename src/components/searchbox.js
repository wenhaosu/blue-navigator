import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';
import './searchbox.css';
import Select from "react-styled-select";
import rooms from "../static/locations";

const buildingOptions = [
    {value: 'bbb', label: 'Bob and Betty Beyster Building'},
    {value: 'ggbrown', label: 'G.G.Brown'},
    {value: 'masonhall', label: 'Mason Hall'},
    {value: 'eecs', label: 'EECS Building'},
    {value: 'duder', label: 'Duderstadt Center'}
];

// const roomOptions = [
//     {value: '1670', label: '1670'},
//     {value: '1690', label: '1690'},
//     {value: '2870', label: '2870'},
//     {value: '3777', label: '3777'},
//     {value: '4773', label: '4773'}
// ];

class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.state = {buildingValue: '', roomValue: '', roomOptions:[]};

        this.handleBuildingChange = this.handleBuildingChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);

    }

    handleBuildingChange(value) {
        this.setState({buildingValue: value});
        if (value == 'bbb') {
            let options = [];
            for (let key in rooms) {
                let temp = {};
                temp["value"] = key;
                temp["label"] = key;
                options.push(temp);
            }
            this.setState({roomOptions: options})
        }
        else {
            this.setState({roomOptions: []})
        }
    }

    handleRoomChange(value) {
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
                <Select className="dark-theme search-room" options={this.state.roomOptions}
                        placeholder="Select Your Room"
                        value={this.state.roomValue} onChange={this.handleRoomChange}/>
                <FontAwesomeIcon
                    className="search-icon" icon={faArrowCircleRight} size="lg"
                    onClick={
                        (e) => {
                            e.preventDefault();
                            history.push(`/search?q=${encodeURIComponent(this.state.buildingValue + " " + this.state.roomValue)}`);
                        }
                    }/>
            </div>
        );
    }
}

export default withRouter(Searchbox);