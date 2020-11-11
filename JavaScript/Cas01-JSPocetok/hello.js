                            //Promenlivi ili Varijabli

var name = 'Timce';

// ima 3 nacini za deklariranje na promenlivi i toa: var, let i const

// let i const deklariraat promenlivi koi vazat samo vo ramkite na eden scope( pr: vo nekoja funkcija ), dodeka so var promenlivata moze
// da se pristapi od bilo kade vo kodot(globalni promenlivi).

console.log("Custom text");
console.log(name);

//                              Podatocni tipovi - Data Types (primitivni i slozeni)

//           PRIMITIVNI:

//   number (integers, floats and doubles) se site so isto ime => number 
//   boolean = prima edna od dvete vrednost true ili false 
//   string e za da zacuvame tekst
//   undefined e koga nekoja promenliva ne e definirana od koj tip e (ima vrednost promenlivata no ne e definirana od koj tip e)
//   null e koga nekoja promenliva nema vrednost

//           String

var stringVar = 'Ova e string varijabla';
var booleanVar = true;
var numberVar = 26;

var undefinedVar;

console.log(stringVar);
console.log(booleanVar);
console.log(numberVar);

console.log(typeof(stringVar));
// undefinedVar = 10;
console.log(undefinedVar);

var varOne = 5;
var varTwo = 10;

console.log(varOne == varTwo);

// toa sto ke se napise vo input-ot od prompt ke ni se zacuva vo temp
var temp = prompt("Enter your message! then see console on brosers");
console.log(temp);