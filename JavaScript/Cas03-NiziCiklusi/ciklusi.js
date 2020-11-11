// Ciklusi(Loops) ni ovozmozuvaat avtomatska iteracija niz nizi, objekti, stringovi, broevi itn..

// moze da se iskoriste let namesto var, bidejki promenlivata i ke ni se koristi samo lokalno vo teloto na for ciklusot
// for (let i = 0; i < 10; i++)
// {
//     console.log(i);
// }

// najcesto se pisuva vaka nemora let i = 0, bidejki avtomatski znae deka toj del od for ciklusot e variabla(promenliva)
for (i = 80; i < 100; i++)
{
    console.log(i);
}
console.log('Broevi koi se delivi so 3 vo prvite 100 broja se: ');
for (i = 0; i < 100; i++)
{
    if(i%3 == 0)
    {
        console.log(i);
    }
}

var from = prompt("Enter from number..");
var to = prompt("Enter to number..");
from = parseInt(from);
to = parseInt(to);
for (i = from; i < to; i++)
{
    console.log(i);
}


var cars = ["Ford", "Opel", "Mazda", "BMW", "Audi", "Mercedes", "Yugo", "Honda"]

for (i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}