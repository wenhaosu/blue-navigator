import React, {Component} from 'react';
import './intro-box.css';
import PropTypes from 'prop-types';

class IntroBox extends Component {

    render() {
        return (
            <div className="intro-box">
                <div className="left">
                    <div className="image">
                        <img src={this.props.url} alt="building"/>
                    </div>
                    <div className="building-title">
                        {this.props.name}
                    </div>
                </div>
                <div className="right">
                    <div className="doc">
                        {this.props.intro}
                    </div>
                </div>
            </div>
        );
    }
}

IntroBox.propTypes = {
    url: PropTypes.string,
    intro: PropTypes.string,
    name: PropTypes.string,
};

export default IntroBox;
