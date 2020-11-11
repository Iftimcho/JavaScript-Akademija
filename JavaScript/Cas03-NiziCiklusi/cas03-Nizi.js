var car = "Audi";
var car1 = "BMW";
var car2 = "Mercedes";

// So nizite mozeeme vo edna niza(promenliva) da gi zapisime site promenlivi i da gi izminuvame mnogu ednostavno

var cars = ["BMW", "Audi", "Mercedes", "Opel"];

console.log(cars[0]);


cars.push("Mazda");
console.log("Nizata posle push('Mazda') e :")
console.log(cars);

cars.pop();
console.log('Nizata posle pop() e :')
console.log(cars)

console.log('.length povikan na cars ni vrakja: ' + cars.length);
console.log('.sort na cars ke ni vrati : ' + cars.sort());
console.log('.reverseSort na cars ke ni vrati: ' + cars.reverse());

// splice brise del od niza cars.splice(indexFrom, indexTo);
console.log('cars.splice(2,3) ke ni vrati: ' + cars.splice(2,3));
console.log(cars);