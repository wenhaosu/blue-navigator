import React, {Component} from 'react';
import request from 'request';
import Slide from './slide';
import Searchbox from '../components/searchbox';
import './slides.css';
import {WindowContext} from "../App";

class Slides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reverse: false
        };
        this.updateImage = this.updateImage.bind(this);
        this.getNextIndex = this.getNextIndex.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }

    componentDidMount() {
        let images =
            [
                "https://s3.amazonaws.com/eecs493/blue-navigator/umich-1.jpg",
                "https://s3.amazonaws.com/eecs493/blue-navigator/umich-2.jpg",
                "https://s3.amazonaws.com/eecs493/blue-navigator/umich-3.jpg",
                "https://s3.amazonaws.com/eecs493/blue-navigator/umich-4.jpg"];
        this.setState({urls: images, index: 0});
        for (let index of [0, 1]) {
            this.loadImage(images, index);
        }
    }

    updateImage() {
        let nextIndex;
        if (this.state[`imgSrc-${this.getNextIndex()}`]
            && this.state[`imgWidth-${this.getNextIndex()}`]
            && this.state[`imgHeight-${this.getNextIndex()}`]) {
            nextIndex = this.getNextIndex();
        } else {
            nextIndex = 0;
        }
        this.setState({
            index: nextIndex,
            reverse: !this.state.reverse
        });
        this.loadImage(this.state.urls, (nextIndex + 1) % this.state.urls.length);
    }

    loadImage(urls, index) {
        if (this.state[`imgSrc-${index}`] && this.state[`imgWidth-${index}`] && this.state[`imgHeight-${index}`]) {
            return;
        }
        request.get({url: urls[index], encoding: null}, function (error, response, body) {
            const data = 'data:' + response.headers['content-type'] + ';base64,' + new Buffer(body).toString('base64');
            const image = new Image();
            image.onload = function () {
                this.setState({
                    [`imgWidth-${index}`]: image.width,
                    [`imgHeight-${index}`]: image.height
                });
            }.bind(this);
            image.src = data;
            this.setState({
                [`imgSrc-${index}`]: data,
            });
        }.bind(this));
    }

    getNextIndex() {
        return (this.state.index + 1) % this.state.urls.length;
    }

    render() {
        return (
            <WindowContext.Consumer>
                {({windowWidth, windowHeight}) => (
                    <div className="slides"
                         style={{
                             height: windowHeight,
                             width: windowWidth,
                         }}>
                        {(this.state && this.state.hasOwnProperty('index')
                            && this.state[`imgSrc-${this.state.index}`]
                            && this.state[`imgWidth-${this.state.index}`]
                            && this.state[`imgHeight-${this.state.index}`]) &&
                        <Slide
                            key={this.state.index}
                            imgSrc={this.state[`imgSrc-${this.state.index}`]}
                            imgWidth={this.state[`imgWidth-${this.state.index}`]}
                            imgHeight={this.state[`imgHeight-${this.state.index}`]}
                            windowWidth={windowWidth}
                            windowHeight={windowHeight}
                            reverse={this.state.reverse}
                            onComplete={this.updateImage}
                        />}
                        <Searchbox style={{
                            position: 'absolute',
                            width: 500,
                            maxWidth: '80%',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}/>
                    </div>)}
            </WindowContext.Consumer>
        );
    }
}

export default Slides;
