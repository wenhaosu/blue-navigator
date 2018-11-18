import React, {Component} from 'react';
import './search.css';
import * as qs from 'query-string';
import IntroPage from "./intro-page";
import {WindowContext} from '../App';
import { Scroller, Section } from "react-fully-scrolled";

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
        // request.get({
        //     url: `${API_ENDPOINT}/search?q=${encodeURIComponent(this.state.query)}`,
        //     json: true
        // }, (error, response, items) => {
        //     if (response && response.statusCode === 200) {
        //         this.setState({
        //             items: items
        //         });
        //     }
        // });
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
                    <WindowContext.Consumer>
                        {({windowWidth, windowHeight}) => (
                            <div className="search">
                                <IntroPage building={this.state.building} windowWidth={windowWidth}
                                           windowHeight={windowHeight}/>
                            </div>)}
                    </WindowContext.Consumer>
                </Section>
                <Section>Page2</Section>
                <Section>Page3</Section>
                <Section>Page4</Section>
            </Scroller>
        );
    }
}

export default Search;
