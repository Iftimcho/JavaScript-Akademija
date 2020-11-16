var i = 0;
var numbers = [1,2,3,4,5,6,7,8,9,10];
var cars = ['Ford', 'Nissan', 'Tesla', 'BMW', 'Audi', 'Mercedes'];
while( i < numbers.length)
{
    console.log("i = " + i);
    i++;
}
console.log('##############');
console.log('Do/While ciklus:')
var j = 0;
do {
    console.log(cars[j]);
    j++;
}
while(j < cars.length)


console.log('##############');
console.log('Foreach ciklus: ')
cars.forEach(car => {
    console.log(car);
});

console.log('##############');

// Filter i Map rabotat samo so arrays. Znaci mora da gi povikame na array, isto kako i forEach.
console.log('Filter Ciiklus');
var people = ['Timce', 'Martin', 'Anastasija', 'Milos', 'Aleksandar', 'Stefan', 'Sanja'];
var newArray = [];

// ova e primer za kako bi izgledalo so foreach
people.forEach(element => {
    if(element.length > 6)
    {
        newArray.push(element);
    }
});

console.log(newArray);

// ova e primer kako se postignuva istoto, no so filter
var newFilteredArray = [];
newFilteredArray = people.filter(element => element.length > 5);

console.log('Nizata izminata so filter e: ');
console.log(newFilteredArray);


console.log('##############');
console.log('Map Ciklus');

// Google veli: 
//         Map creates a new array by transformin every element individually. 
//         Filter creates a new array by removing elements that do not complete(belong) the given condition.
people.map( element => element.length < 5)
console.log(people);