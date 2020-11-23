function testFunction() {
    console.log("Log 2 inside testFUnction");
}

function sum(num1, num2)
{
    // console.log(num1+num2);
    return num1 + num2;
}

console.log("Log 1");


// Ima 3 nacini na koi moze da se povika funkcija
// 1 nacin: so povikuvanje na funkcijata
// 2 nacin: so event(click,hover itn..)
// 3 nacin: sama da se povika - izgleda se misli na rekurzija

// nacin 1
testFunction();
console.log(sum(15,10));