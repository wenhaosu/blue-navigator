import React, {Component} from 'react';
import './search.css';
import * as qs from 'query-string';
import IntroPage from "./intro-page";
import EntrancePage from "./entrance-page";
import {WindowContext} from '../App';
import { Scroller, Section } from "react-fully-scrolled";

document.ontouchmove = function(ev) {
    ev.preventDefault();
};

class Search extends Component {
    constructor(props) {
        super(props);
        let query = Search.getQueryFromProps(props).split(' ');
        this.state = {
            building: query[0],
            room: query[1]
        };
    }

    static getQueryFromProps(props) {
        return qs.parse(props.location.search, {ignoreQueryPrefix: true}).q;
    }

    componentDidMount() {
        console.log(this.state.building);
        console.log(this.state.room);
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
                    <IntroPage building={this.state.building} />
                </Section>
                <Section>
                    <EntrancePage building={this.state.building} />
                </Section>
                <Section>
                    <EntrancePage building={this.state.building} />
                </Section>
            </Scroller>
        );
    }
}

export default Search;
