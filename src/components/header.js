import React, { Component } from 'react';
import './header.css';
import logo from '../imgs/logo.png';



export default class Header extends Component {
    render() {
        return (
            <nav className="header">
                <div className="left-conent">
                    <a href="/" ><img className="logo" src={logo} alt="Logo"/></a>
                </div>
                <div className="right-content">
                    <label className="the-product-browse-f">Already a user?</label>
                    <a href="/"><button type="button" className="btn-default">Login</button></a>
                </div>
            </nav>  
        )
    }
}
