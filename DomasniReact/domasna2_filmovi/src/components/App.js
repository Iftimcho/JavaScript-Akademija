import React from 'react';
import { Movies } from './Movies';

const movies = [
  {
    name: 'Interstellar',
    releaseDate: 2014,
    genre: 'Adventure, Drama, Sci-Fi',
    plot:'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival',
    imdbLink: 'https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
  },
  {
    name: 'The Dark Knight',
    releaseDate: 2008,
    genre: 'Action, Crime, Drama',
    plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    imdbLink: 'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg'
  },
  {
    name: 'Inception',
    releaseDate: 2010,
    genre: 'Action, Adventure, Sci-Fi',
    plot:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imdbLink: 'https://www.imdb.com/title/tt1375666/?ref_=tt_sims_tt',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
  },
  {
    name: 'The Avengers',
    releaseDate: 2012,
    genre: 'Action, Adventure, Sci-Fi',
    plot:'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    imdbLink: 'https://www.imdb.com/title/tt0848228/?ref_=nv_sr_srsg_3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg'
  },
  {
    name: 'Gladiator',
    releaseDate: 2000,
    genre: 'Action, Adventure, Drama',
    plot:'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    imdbLink: 'https://www.imdb.com/title/tt0172495/?ref_=nv_sr_srsg_0',
    imageUrl: 'https://resizing.flixster.com/vkK8qxwqVqm_u6Y7vmmSM95rRkY=/206x305/v2/https://flxt.tmsimg.com/assets/p24674_p_v10_ag.jpg'
  }
]

const text = {
  textAlign: 'center',
  fontSize: '38px',
  color: 'Green'
};

export function App() {
  return(
    <div id="app">
      <h1 style={text}>Favourite movies application</h1>
      <Movies filmovi={ movies } />
    </div>
  )
}