import React, {Component} from 'react';
import './search.css';
import * as qs from 'query-string';
import IntroPage from "./intro-page";
import EntrancePage from "./entrance-page";
import { Scroller, Section } from "react-fully-scrolled";
import NavPage from "./nav-page";
import RoomPage from "./room-page";

document.ontouchmove = function(ev) {
    ev.preventDefault();
};

class Search extends Component {
    constructor(props) {
        super(props);
        let query = Search.getQueryFromProps(props).split(' ');
        this.state = {
            building: query[0],
            room: query[1],
            start: ""
        };
        this.setStartPoint = this.setStartPoint.bind(this);
    }

    static getQueryFromProps(props) {
        return qs.parse(props.location.search, {ignoreQueryPrefix: true}).q;
    }

    componentDidMount() {
        console.log(this.state.building);
        console.log(this.state.room);
    }

    setStartPoint(point){
        this.setState({
            start: point
        });
        console.log(this.state.start)
    }

    render() {
        return (
            <Scroller
                curPage={1}
                onBeforeScroll={(from, to) => {}}
                onAfterScroll={page => {}}
                isEnabled={true}
            >
                <Section>
                    <IntroPage building={this.state.building} />
                </Section>
                <Section>
                    <NavPage building={this.state.building} />
                </Section>
                <Section>
                    <EntrancePage building={this.state.building} setFunc={this.setStartPoint}/>
                </Section>
                <Section>
                    <RoomPage building={this.state.building}
                              curFloor={1} destFloor={3} curRoom={"diag"} destRoom={"3777"}/>
                </Section>
            </Scroller>
        );
    }
}

export default Search;
