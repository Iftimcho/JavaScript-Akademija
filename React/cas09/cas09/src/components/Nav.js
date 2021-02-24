import React from 'react';
import {Link} from 'react-router-dom';
export function Nav() {
    return(
        <ul>
            <li><Link to="/">Back to home</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            
        </ul>
    )
}