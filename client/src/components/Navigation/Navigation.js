import React, {useState} from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom"

const Navigation = () => {


    return (
        <div className="menu">
            <ul>
                <li className="nav-item">
                <NavLink className="navlinks" to="/">About Me</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink className="navlinks" to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="navlinks" to="/resume">Resume</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="navlinks" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
