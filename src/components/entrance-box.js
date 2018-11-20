import React, {Component} from 'react';
import './entrance-box.css';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class EntranceBox extends Component {

    constructor(props) {
        super(props);
        this.setId = this.setId.bind(this);
    }

    setId() {
        this.props.setFunc(this.props.id);
        this.props.setColor(this.props.numIndex)
    }

    render() {
        return (
            <div className="entrance-box" style={{boxShadow: `0 0 10px 5px ${this.props.color}`}}>
                <div className="image">
                    <img src={this.props.url} alt="building"/>
                </div>
                <div className="entrance-title">
                    {this.props.name}
                </div>
                <div className="button">
                    <Button onClick={this.setId}>I'm Here!</Button>
                </div>
            </div>
        );
    }
}

EntranceBox.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
};

export default EntranceBox;
