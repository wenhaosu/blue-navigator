import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';
import './searchbox.css';
import Select from "react-styled-select";

const buildingOptions = [
    { value: 'bbb', label: 'Bob and Betty Beyster Building' },
    { value: 'ggbrown', label: 'G.G.Brown' },
    { value: 'masonhall', label: 'Mason Hall' },
    { value: 'eecs', label: 'EECS Building' },
    { value: 'duder', label: 'Duderstadt Center' }
];

const roomOptions = [
    { value: '1670', label: '1670' },
    { value: '1690', label: '1690' },
    { value: '2870', label: '2870' },
    { value: '3777', label: '3777' },
    { value: '4773', label: '4773' }
];

class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {style, history} = this.props;
        return (
            <div style={style}>
                <div className="slogan">Blue Navigator</div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    history.push(`/search?q=${encodeURIComponent(this.state.value)}`);
                }}>
                    {/*<div className="searchbox">*/}
                        <Select className="dark-theme" options={buildingOptions}
                                value={this.state.value} onChange={this.handleChange}/>
                        {/*<Select options={roomOptions}/>*/}
                    {/*</div>*/}
                </form>
            </div>
        );
    }
}

export default withRouter(Searchbox);
