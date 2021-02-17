import React from 'react';
import { Link } from 'react-router-dom';
export function Navigation() {
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/info">Info</Link></li>
        </ul>
    )
}