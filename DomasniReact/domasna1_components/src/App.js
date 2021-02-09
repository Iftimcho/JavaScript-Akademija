import React from 'react';
import { Component } from "./Component";

const user1 = {
  firstName: 'Timce',
  lastName: 'Pop-Icovski',
  adult: true,
};

const user2 = {
  firstName: 'Someone',
  lastName: 'Somebody',
  adult: false
};

 
export function App() {
  return(
    <div id="app">
      <h1>My React App</h1>
      <Component korisnik1={user1} korisnik2={user2} prikaziPrv={true}/>
    </div>
  )
}