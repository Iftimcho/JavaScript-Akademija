import React from 'react';
import PropTypes from 'prop-types';

const list = {
    border: '4px solid green',
    borderRadius: '8px',
    padding: '10px',
    background: 'lightgreen'
};

const listItem = {
    listStyleType: 'none',
    border: '2px solid red',
    borderRadius: '15px',
    padding: '10px',
    margin: '5px',
    display: 'flex',
    background: 'orange',
}
const imgContainer = {
    marginRight: '10px'
}
export function Movies(props) {
    console.log(props);
    return(
        <div id="movies">
            <ul style={list}>
                {
                    props.filmovi.map((movie, i) => {
                        return(
                            <li key={i} style={ listItem }>
                                <div style={imgContainer}>
                                    <img src={movie.imageUrl} width="200px" height="300px"></img>
                                </div>
                                <div>
                                    <h4>{movie.name}</h4>
                                    <p>{movie.releaseDate}</p>
                                    <p>{movie.genre}</p>
                                    <p>{movie.plot}</p>
                                    <a href={movie.imdbLink} target="_blank">{movie.imdbLink}</a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

Movies.propTypes = {
    filmovi: PropTypes.array.isRequired
}