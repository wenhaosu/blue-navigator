import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import * as Scroll from 'react-scroll';
import logo from '../static/logo-white-frame.svg';
import './navbar.css';

const scroll = Scroll.animateScroll;

class Navbar extends Component {
    render() {
        const home = this.props.home;
        return (
            <div className="navbar" style={{backgroundColor: home ? '' : '#000000'}}>
                <div className="nav-items">

                    <div className="nav-item">
                        {home ?
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scroll.scrollToBottom();
                            }}>Contact</Link> :
                            <HashLink to="/#contact">Contact</HashLink>}
                    </div>
                    <div className="nav-item">
                        {home ?
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scroll.scrollTo(document.documentElement.clientHeight);
                            }}>About</Link> :
                            <HashLink to="/#about">About</HashLink>}
                    </div>
                </div>
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} className="logo-header" alt="logo"/>
                    </Link>
                </div>
                <div className="nav-toggle">
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {
    home: PropTypes.bool,
};

export default Navbar;
