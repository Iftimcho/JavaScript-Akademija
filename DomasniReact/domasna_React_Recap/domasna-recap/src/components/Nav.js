import React from 'react';
import {Link} from 'react-router-dom';
export function Nav() {
    return(
        <div id="nav">
            <ul>
                <Link to="/home"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </ul>
        </div>
    )
}