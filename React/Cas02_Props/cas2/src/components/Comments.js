import React from 'react';

// props.multipleComments === true e isto so props.multipleComments samo ako sporeduvame boolean vrednosti
export function Comments(props) {
    // console.log(props);
    return(
        <div id="comments">
            {props.hasComments && <h3>Comments</h3> }
            <p>{props.hasComments}</p>
            {props.multipleComments === true ?
             <h2>This component has multiple comments.</h2> :
             <h2>This component does not have multiple comments</h2>}
        </div>
    )
}