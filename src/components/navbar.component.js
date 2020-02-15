import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg" style={{"backgroundColor": "#78e08f"}}>
                <Link to="/" className="navbar-brand">Online EHR</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">Records</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Record Log</Link>
                </li>
                <li className="navbar-item">
                <Link to="/patient" className="nav-link">Create Patient</Link>
                </li>
                </ul>
                </div>
            </nav>
        );
    }
}