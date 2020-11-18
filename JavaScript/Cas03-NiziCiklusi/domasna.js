var persons = [
    {
        Name: 'Timce',
        Surname: 'Pop-Icovski',
        Gender: 'Male',
        Age: 26
    },
    {
        Name: 'Elena',
        Surname: 'Pop-Icovska',
        Gender: 'Female',
        Age: 17
    },
    {
        Name: 'Ivona',
        Surname: 'Ramneshova',
        Gender: 'Female',
        Age: 25
    },
    {
        Name: 'Riste',
        Surname: 'Tanev',
        Gender: 'Male',
        Age: 18
    },
    {
        Name: 'Gabriela',
        Surname: 'Popicovska',
        Gender: 'Female',
        Age: 14
    }
]

var adults = [];
for (i = 0; i < persons.length; i++)
{
    if(persons[i].Age >= 18)
    {
        adults.push(persons[i].Name)
    }
}

console.log('Polnoletni se: ' + adults);


var polnoletni = [];
persons.forEach((person) => {
    if(person.Age >= 18)
    {
        polnoletni.push(person.Name);
    }
})

console.log(polnoletni);