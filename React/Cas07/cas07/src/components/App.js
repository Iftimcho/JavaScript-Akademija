import React, {useState} from 'react';
import {People} from './People';
import { Switch, Route }from 'react-router-dom';

import {Contact} from './Contact';
import {About} from './About';
import {Info} from './Info';
import {Navigation} from './Navigation';

export function App() {
  // tuka ke gocuvame state-ot
  const [person, setPerson] = useState({name: '', lastName:'', dob:''});
  // const [person, setPerson] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [year, setYear] = useState('');
  const [people, setPeople] = useState([
    { id: 1, name: "Pero", lastName: "Perovski", year: 1996 },
    { id: 2, name: "Ivan", lastName: "Ivanovski", year: 1997 },
    { id: 3, name: "Stefan", lastName: "Stefanovski", year: 1998 }
  ]);
  const [newPerson, setNewPerson] = useState('');

  function addPerson(e) {
      e.preventDefault();
      let person = {
        id: people.length + 1,
        name: name,
        lastName: lastName,
        year: year
      };
      setPeople([...people, person]);
      setName('');
      setLastname('');
      setYear('');
  };

  function deletePerson(person) {
    setPeople(
      [
        ...people.filter(item => item.id !== person.id)
      ]
    )
  }

  function updatePerson(newPerson) {
    // setPeople([
    //   ...people.map(item =>  
    //     (item.id === person.id) ?
    //     {
    //       ...people, name: newPerson.name,
    //       ...people, lastName: newPerson.lastName,
    //       ...people, year: newPerson.year,
    //     }: item
    //   )
    // ])
    const index = people.findIndex((obj) => obj.id === newPerson.id);
    people[index].name = newPerson.name;
    people[index].lastName = newPerson.lastName;
    people[index].year = newPerson.year;
    setPeople([...people.map(item => { 
          if(item.id === newPerson.id) {

          }
      })
    ])
  }

  function editPerson(person) {
    setName(person.name);
    setLastname(person.lastName);
    setYear(person.year);
    let newPerson = {
      id: person.id,
      name: person.name,
      lastName: person.lastName,
      year: person.year
    }
    console.log('new person' + newPerson.name);
    // const index = people.findIndex((obj) => obj.id === newPerson.id);
    // people[index].name = newPerson.name;
    // people[index].lastName = newPerson.lastName;
    // people[index].year = newPerson.year;
    updatePerson(newPerson);
  }
  return(


    <div id="app">
    <Navigation />
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/info" component={Info} />
    </Switch>


      <h2>Cas07 - Vezba so inputs i dodavanje, brisenje i azuriranje na stavka od tabela</h2>

      <form onSubmit={addPerson}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => {setName( e.target.value)}}/> <br/><br/>
        <input type="text" placeholder="Enter Lastname" value={lastName} onChange={e => setLastname(e.target.value)}/><br/><br/>
        <input type="text" placeholder="Enter birth year" value={year} onChange={e => setYear(e.target.value)}/><br/><br/>

        <button>
          Add Item
        </button>
      </form>
      <button onClick={updatePerson}>Update</button>
      <br/><br/>
      <People people={people} deletePerson={deletePerson} editPerson={editPerson} />
    </div>
  )
}