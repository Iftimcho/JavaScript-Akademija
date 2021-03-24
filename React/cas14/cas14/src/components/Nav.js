import React from 'react';
import {Link} from 'react-router-dom';
import "./../assets/Nav.css";
export function Nav(){
    return(
    <ul>
        <li><Link to="/search-cities">Search Cities</Link></li>
    </ul>
    )
}