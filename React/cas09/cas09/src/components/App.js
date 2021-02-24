import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Albums} from './Albums';

import {Posts} from './Posts';
import {Nav} from './Nav';
import {Gallery} from './Gallery';
import {API_URL} from './../constants';


export function App() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(err => alert(err))

    fetch(`${API_URL}/photos`)
      .then(res => res.json())
      .then(json => setPhotos(json))
      .catch(err => alert(err))
  }, [])

  function openPhoto(photoUrl) {
    setSelectedImage(photoUrl);
  }

  function closePhoto() {
    setSelectedImage('');
  }

  return(
  <div id="app">
    <h2>React App - Router</h2>
    <Nav />
    <Switch>
      <Route path="/albums" component={Albums} />
    
      {/* <Route path="/userlist" component={UserList} /> */}
      <Route path="/posts" render={() => {
        return <Posts postList={posts}/> //so render mozeme da pratime parametri vo rutata
      }} />
      <Route path="/gallery" render={() => {
        return <Gallery 
        photoList={photos}
        openPhoto={openPhoto}
        selectedImage={selectedImage}
        closePhoto={closePhoto}
        />
      }} />
    </Switch>
  </div>)
}