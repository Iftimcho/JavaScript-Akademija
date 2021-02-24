import React, {useState, useEffect} from 'react';
import { API_URL } from '../constants';

export function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/albums`)
        .then(res => res.json())
        .then(json => setAlbums(json))
        .catch(err => alert(err))
    }, [])
    return(
        <div id="albums">
            {
                albums.length > 0 ? <ul>
                    {
                        albums.map((album) => {
                            return(
                                <li key={album.id}>
                                    <span><b>ID:</b> {album.id}</span>
                                    <br/>
                                    <span><b>Title:</b> {album.title}</span>
                                    <hr/>
                                </li>
                            )
                        })
                    }
                </ul>
                : <h3>loading albums...</h3>
            }
        </div>
    )
}