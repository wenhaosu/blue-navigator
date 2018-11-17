import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './home/home';
import NavbarMobile from './components/navbar-mobile';
import './App.css';

export const WindowContext = React.createContext();

const HomeNavbar = (props) => {
    return (
        <Navbar
            home
            {...props}
        />
    );
};

const HomeNavbarMobile = (props) => {
    return (
        <NavbarMobile
            home
            {...props}
        />
    );
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: document.documentElement.clientWidth,
            windowHeight: window.innerHeight,
            expand: false,
        };
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
            windowWidth: document.documentElement.clientWidth,
            windowHeight: window.innerHeight
        });
    }

    render() {
        return (
            <WindowContext.Provider value={{
                windowWidth: this.state.windowWidth,
                windowHeight: this.state.windowHeight
            }}>
                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={this.state.windowWidth > 768 ? HomeNavbar : HomeNavbarMobile}
                            />
                            <Route
                                path='/'
                                component={this.state.windowWidth > 768 ? Navbar : NavbarMobile}
                            />
                        </Switch>
                    </div>
                </Router>
            </WindowContext.Provider>
        );
    }
}

export default App;
