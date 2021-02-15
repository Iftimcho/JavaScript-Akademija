import React from 'react';
export function Welcome(props) {
    // console.log(props);
    return(
        <div id="welcome">
            <p>Welcome, {props.ime} {props.prezime}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

// export default Welcome; <- moze da se napise i vaka a pri definiranje na funkcijata ke bide bez export