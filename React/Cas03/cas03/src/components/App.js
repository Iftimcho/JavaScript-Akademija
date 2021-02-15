import React from 'react';
import { Domasna } from './domasna';
import { Comments } from './Comments';
import { Car } from './Car';
import { Person } from './Person';

const user1 = {
  ime: 'Timce',
  username: 'timce123',
  email: 'timce@mail.com'
};

const user2 = {
  ime: 'Ivona',
  username: 'ivona456',
  email: 'ivona@mail.com'
};

const comments = [
  {
    author: 'Timce',
    content: 'timces comments',
  },
  {
    author: 'Ivona',
    content: 'ivonas comments',
  },
  {
    author: 'Elena',
    content: 'elenas comments'
  }
];
const registracija = [
  {
    grad: 'Skopje',
    oznaka: 'SK-9999-AC'
  },
  {
    grad: 'Gostivar',
    oznaka: 'GV-1111-Ab'
  },
  {
    grad: 'Kavadarci',
    oznaka: 'KA-7777-AC'
  }
];

let cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    year: 2000,
    plates: registracija[0]
  },
  {
    brand: 'Mercedes',
    model: 'C200',
    year: 2002,
    plates: registracija[1]
  },
  {
    brand: 'BMW',
    model: 'X6',
    year: 2015,
    plates: registracija[2]
  }
];

const persons = [
  {
    person: {
      firstName: 'Timce',
      lastName: 'Pop-Icovski',
      address: {
        street: 'Some Street',
        number: 'Some number',
        city: 'Kavadarci',
        zipCode: 1430
      },
      phone: "123456",
      employment: "Developer"
    },
    datum: "26-01-1994"
  },
  {
    person: {
      firstName: 'Ivona',
      lastName: 'Ramnesova',
      address: {
        street: 'Some Street also',
        number: 'Some number also',
        city: 'Kavadarci also',
        zipCode: 1430
      },
      phone: "987654",
      employment: "Economist"
    },
    datum: "20-01-1995"
  },
  {
    person: {
      firstName: 'Elena',
      lastName: 'Pop-Icovska',
      address: {
        street: 'Some Street again...',
        number: 'Some number again...',
        city: 'Kavadarci again...',
        zipCode: 1430
      },
      phone: "123456789",
      employment: "###"
    },
    datum: "01-02-1995"
  },
]

export function App(){
  return(
    <div id="app">
      <h1>React Application</h1>
      <Car vozila={ cars }/>
      <Domasna korisnik1={ user1 } korisnik2={ user2 } prikaziPrv = { false } prikaziKorisnik={ true }/>
      <Comments 
      komentari={ comments } 
      cifra={5}
      />
      <Person persons={persons} />
    </div>
  )
}