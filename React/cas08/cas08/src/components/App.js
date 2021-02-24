import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {About} from './About';
import {Info} from './Info';
import {Contact} from './Contact';
import {Nav} from './Nav';
import {Users} from './Users';
import {UserList} from './UserList';

export function App() {

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )  //imeto na argumentot vo anonimnata funkcija go davame nie i rezultatot go transformirame vo json
        .then(json => setUserList(json)) // ova se izvrsuva 3to
        .catch(err => alert(err));
  }, [])

  return(
  <div>
    <h2>React App - Router</h2>
    <Nav />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route path="/about/contact" component={Contact} />
      <Route path="/info" component={Info} />
      <Route path="/users" component={Users} />
      {/* <Route path="/userlist" component={UserList} /> */}
      <Route path="/user-list" render={() => {
        return <UserList listOfUsers={userList} /> //so render mozeme da pratime parametri vo rutata
      }} />
    </Switch>
  </div>)
}