import React from 'react';
import PropTypes from 'prop-types';


export function Comments(props) {
    console.log(props);
    return(
        <div id="comments">
            <h3>Comments</h3>
            <ul>
            {
                props.komentari.map((komentar, i) => {
                    return (
                        <li key={ i }>
                            <p>Author: { komentar.author } </p>
                            <p>Content: { komentar.content } </p>
                        </li>
                    )
                })
            }
            </ul>
            <p>{ props.cifra }</p>
        </div>
    )
}

Comments.propTypes = { //ovde prop se pisuva so mala pocetna bukva iako gore e deklarirano so golema bukva
    komentari: PropTypes.array.isRequired,
    cifra: PropTypes.number // ako ne mu stavime isRequired togas ova property e opcionalno, moze i ne mora da mu se predadi vrednost od parent
}