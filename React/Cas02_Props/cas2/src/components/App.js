import React from 'react';
import { Welcome } from './Welcome';
import { Comments } from './Comments';
import { Student } from './Student';
import { FruitList } from './FruitList';

const name = "Timce";
const age = 26;

const student = {
    ime: 'Timce',
    prezime: 'Pop-Icovski',
    age: 27,
    brNaIndeks: 121015
};

let fruits = [
  "Apple",
  "Orange",
  "Mango"
];
export function App() {
  return(
    <div id="app">
      <h2>My App</h2>
      <Welcome ime={ name } prezime={"Pop-Icovski"} age={age}/>
      <Welcome ime={ "Ivona" } prezime={"Ramneshova"}/>
      <Comments hasComments={false} multipleComments={true}/>
      <Student studentFinki={student}/>
      <FruitList listOfFruits={fruits}/>
    </div>
  )
}