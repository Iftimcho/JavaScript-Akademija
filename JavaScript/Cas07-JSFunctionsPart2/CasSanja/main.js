let niza = [1,2,4];

for (i = 0; i < niza.length; i++)
{
    console.log(niza[i]);
}

// FOR OF za izminuvanje na nizi

for(element of niza)
{
    console.log(element);
}

let person = {name: "Timce", surname: "Pop-Icovski", age:26, 10: "deset"}


console.log(person.name);
console.log(person["surname"]); // koga ne gi znaeme site klucevi na objektot i koga klucot ne e so tekstualna vrednost 
console.log(person["10"]); // vaka go zema klucot po vrednost a ne po tip( so == , a ne so ===)

for(key in person){
    console.log(key);
}

// FOR IN
for (key in person){
    console.log(key+':'+person[key]);
}


// FILTER i MAP

let niza2 = [];

for(element of niza){
    niza2.push(element*2);
}
console.log(niza2);


function ime(a){
    console.log(a);
}
ime(5);

let f = function(){
    console.log("Zdravo");
}

f();

// document.getElementById('userBtn').addEventListener("click", function(){ // ovaa funkcija bez ime e anonimna funkcija i e vo scope-ot samo na ovoj blok od kod
//     addUser();
// });

let x = () => {console.log("arrow function")} // nema parametri a ima povekje naredbi
let x1 = () => console.log('arrow function without'); // ako i samo ako ima edna naredba
let x2 = a => {console.log(a)} // Sammo ako imame 1 parametar
let x3 = (a,b) =>{return a + b}; // ako imame return mora da imame fraerski zagradi
let x4 = (a,b)=>a+b; // Ova e slucajot od x3 kade imame ednostavna operacija i nemame potreba od return. Mozeme direkno da vratime ili ispecatime vrednost.

x2("Timce");
x3(2,3);



// CALL BACK FUNCTIONS
function greeting(){
    console.log('Hello');
}

let callGreeting = (callBck) => {
    callBck();
}

// ova e callback. Vo momentot koga ke se izvrsi callGreeting ke se izvrsi i greeting funkcijata.
callGreeting(greeting);


function pecati(ime, godini){
    console.log('Liceto ' + ime + ' ima ' + godini + ' godini');
}

pecati(26, "Timce");  // PORADI OVA E MNOGU BITNO KAKO SE PRAKJAAT PARAMETRITE NA FUNKCIITE. OD SEMANTICKI PRICINI

// ovie 2 se isti
let niza3 = niza.map(x =>  x * 2);
let niza4 = niza.map((x) => { x * 2 });

/*
OVA GO PRAVI MAP VO PRIMEROT POGORE
for(element of niza){
    niza2.push(element*2);
}
*/ 

var persons = [
    {firstName: "Timce", lastName: "Pop", age: 26},
    {firstName: "Ivona", lastName: "Ramn", age:25},    
    {firstName: "Elena", lastName: "Pop", age:25},  
    {firstName: "Mila", lastName: "Pavlov", age:3},  
]

let firstNames = persons.map(x => x.firstName);

let intermediate = persons.filter(x => x.age > 25);

let persons2 = persons.filter(x => x.age > 24).map(x => x.firstName);
console.log(firstNames);
console.log(intermediate);

console.log(persons2);


// REDUCE se koristi koga treba da svedeme nesto na Edna Edinstvena Promenliva

let averageAge = persons.map(x => x.age).reduce((previous,current) => previous + current, 0);
console.log(averageAge/persons.length);