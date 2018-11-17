import React, {Component} from 'react';
import Slides from './slides';
import Pitch from './pitch';
import Footer from '../components/footer';
import {WindowContext} from '../App';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: document.documentElement.clientWidth > 992 ? 0 : 5,
            demoHeight: 0
        };
        this.column1 = React.createRef();
        this.column2 = React.createRef();
        this.demo = React.createRef();
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            demoHeight: this.column1.current && this.column2.current && this.demo.current ? Math.max(this.column1.current.clientHeight, this.column2.current.clientHeight, this.demo.current.clientHeight) + 150 : 0
        });
    }

    render() {
        return (
            <WindowContext.Consumer>
                {({windowWidth, windowHeight}) => (
                    <div className="home">
                        <Slides windowWidth={windowWidth} windowHeight={windowHeight}/>
                        <Pitch windowWidth={windowWidth} windowHeight={windowHeight}/>
                        <Footer windowWidth={windowWidth} windowHeight={windowHeight}/>
                    </div>)}
            </WindowContext.Consumer>
        );
    }
}

export default Home;
