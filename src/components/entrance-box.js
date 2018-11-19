import React, {Component} from 'react';
import './entrance-box.css';
import PropTypes from 'prop-types';

class EntranceBox extends Component {

    render() {
        return (
            <div className="entrance-box">
                <div className="image">
                    <img src={this.props.url} alt="building"/>
                </div>
                <div className="entrance-title">
                    {this.props.name}
                </div>
                <div className="button">
                    <button>Choose This Entrance</button>
                </div>
            </div>
        );
    }
}

EntranceBox.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
};

export default EntranceBox;
