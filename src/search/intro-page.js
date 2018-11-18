import React, {Component} from 'react';
import './intro-page.css';
import PropTypes from 'prop-types';
import buildingInfo from '../static/building-intro-info';

class IntroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.setState({
            url: buildingInfo[this.props.building].img,
            intro: buildingInfo[this.props.building].intro
        });
    }

    render() {
        return (
            <div className="intro-page">
                <div className="image">
                    <img src={this.state.url} alt="building"/>
                </div>
                <div className="intro">
                    {this.state.intro}
                </div>
            </div>
        );
    }
}

IntroPage.propTypes = {
    building: PropTypes.string,
};

export default IntroPage;
