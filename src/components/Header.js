import React, { Component } from 'react';
import logo from '../image/logo.png';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src={logo} alt="Logo Gaud" className="logo"></img>
            </header>
        )
    }
}
