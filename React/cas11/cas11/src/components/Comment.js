import React from 'react';


export function Comment(props) {
    console.log(props);
    return(
        <div id="single-comment">
            <h2>This is a single comment with id {props.match.params.Id}.</h2>
        </div>
    )
}