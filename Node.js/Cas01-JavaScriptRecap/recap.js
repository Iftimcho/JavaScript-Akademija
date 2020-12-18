console.log(age);
var age = 22;

day = "Friday";
console.log(day);

printName();

function printName() {
    console.log('Jon Bon Jovi');
    console.log(age);
    var something = "Something";
}

// promenliva koja prima regular expression, a toa vo slucajot e function(). Ke ni dadi greska dokolku ja povikame pred inicijalizacijata bidejki ne e Hoisted. 
// Regular expression ne e hoisted.
console.log(something);
// print() ke vrati error;
const print = function () {
   console.log('Inside print function'); 
};

