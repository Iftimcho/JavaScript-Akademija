/// string number null undefined boolean se prosti tipovi na podatoci


// Objektite se slozeni tipovi na podatoci

// se kreiraat so kombinacija na primitivnite(obicni) tipovi na podatoci

var car = "Mazda";  // promenliva od tip string
// vo ovaa promenliva car ne mozeme da cuvame razlicni tipovi na podatoci za avtomobilot(boja,kategorija,godina proizvodstvo,registracija) 

var avtomobil = {
    model: 'Mercedes',
    proizvodstvo: 2010,
    boja: 'silver',
    registriran: true,
    pogon: 'On two wheels',
    drzava: 'Germany'
}

var person = {
    name: 'Timce',
    surname: 'Pop-Icovski',
    age: 26,
    email: 'timce@mail.com',
    birthDate: "26.01.1994",
    phone: 123456789
}

console.log(avtomobil.pogon);
console.log(person);

person.phone = 987654321;
person["email"] = "mail@mail.com";

console.log('Po promena na podatocite person objektot e: ');
console.log(person);


// niza sostavena od povekje objekti
var people = [
    {
        // ovoj element e so index 0
        name: 'Timce',
        age: 26
    },
    {
        // ovoj element e so index 1
        name: 'Ivona',
        age: 25
    },
    {
        // ovoj element e so index 2
        name: 'Gabriela',
        age: 44
    }
]

console.log('Nizata people koja e sostavena od objekti e:');
console.log(people);

people[1].name = "Ivonkaa";