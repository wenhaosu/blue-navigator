import React, {Component} from 'react';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import PitchCard from './pitch-card';
import './pitch.css';
import {WindowContext} from "../App";
import demoPic from "../static/demo.png"

class Pitch extends Component {
    static isWideScreen(windowWidth) {
        return windowWidth > 768;
    }

    render() {
        return (
            <WindowContext.Consumer>
                {({windowWidth}) => (
                    <div className={Pitch.isWideScreen(windowWidth) ? 'pitch' : 'pitch-mobile'} id="about">
                        <div className="demo">
                            <img src={demoPic} alt="demo"/>
                        </div>
                        <div className="topics">
                            <div className="pitch-cards">
                                <Fade right={Pitch.isWideScreen(windowWidth)} bottom={!Pitch.isWideScreen(windowWidth)}>
                                    <PitchCard
                                        cardTitle={'INFO OF BUILDING'}
                                        cardText={'Discover detailed info for UMICH buildings'}
                                        cardIconSrc={faBuilding}
                                    />
                                </Fade>
                                <Fade right={Pitch.isWideScreen(windowWidth)} bottom={!Pitch.isWideScreen(windowWidth)}>
                                    <PitchCard
                                        cardTitle={'NAVIGATE TO BUILDING'}
                                        cardText={'Navigate to the selected UMICH building'}
                                        cardIconSrc={faMapMarkedAlt}
                                    />
                                </Fade>
                                <Fade right={Pitch.isWideScreen(windowWidth)} bottom={!Pitch.isWideScreen(windowWidth)}>
                                    <PitchCard
                                        cardTitle={'NAVIGATE TO CLASSROOM'}
                                        cardText={'Find your classroom or professor\'s office in selected UMICH building'}
                                        cardIconSrc={faMapPin}
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>)}
            </WindowContext.Consumer>
        );
    }
}

export default Pitch;
