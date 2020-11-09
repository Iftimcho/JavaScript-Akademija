var num1 = 1;
var num2 = 2;

if (num1 < num2)
{
    console.log("Uslovot e ispolnet");
}

// vrednosta koja ja prima prompt e string. I da vnesime brojka vo programot ke se interpretira kako string
var age = prompt('Enter your age!');

// Ova ke go konvertira stringot vo integer(number) 
age = parseInt(age);
if (age >= 18)
{
    alert('Vie ste polnoleten');
}
else
{
    alert('Vie ste maloleten!')
}

var broj = prompt('Vnesete broj');
broj = parseInt(broj);
if(broj % 2 == 0 && broj != 0)
{
    confirm('Brojot e paren');
}
else if(broj == 0)
{
    confirm('Vie vnesovte nula koj ne e nitu paren nitu neparen');
}
else
{
    confirm('Brojot e neparen');
}


var pogolemOdNula = prompt('Vnesete broj za da proveram dali e pogolem, pomal od nula ili e nula');
pogolemOdNula = parseInt(pogolemOdNula);

if (pogolemOdNula > 0)
{
    alert('Brojot e nula');
}
else if (pogolemOdNula < 0)
{
    alert('Brojot e pomal od nula');
}
else
{
    alert('Vie vnesovte nula');
}

var dayNumber = prompt('Vnesete den');
var dayString = dayNumber;
dayNumber = parseInt(dayNumber);


if(dayNumber == 1 || dayString == "Ponedelnik")
{
    console.log('Vasiot den e Ponedelnik');
}
else if (dayNumber == 2 || dayString == "Vtornik")
{
    console.log('Vasiot den e Vtornik!');
}
else if (dayNumber == 3 || dayString == "Sreda")
{
    console.log('Vasiot den e Sreda!');
}
else if (dayNumber == 4 || dayString == "Cetvrtok")
{
    console.log('Vasiot den e Cetvrtok!');
}
else if (dayNumber == 5 || dayString == "Petok")
{
    console.log('Vasiot den e Petok!');
}
else if (dayNumber == 6 || dayString == "Sabota")
{
    console.log('Vasiot den e Sabota!');
}
else if (dayNumber == 7 || dayString == "Nedela")
{
    console.log('Vasiot den e Nedela!');
}
else
{
    console.log('Vnesovte nevaliden den!!');
}


switch(dayNumber){
   case 1: 
       console.log('Denot e ponedelnik');
       break;
   case 2:
       console.log('Denot e Vtornik');
       break;
   case 3:
       console.log('Denot e Sreda');
       break;
   case 4:
       console.log('Denot e cetvrtok');
       break;
   case 5:
       console.log('Denot e Petok');
       break;
   case 6:
       console.log('Denot e Sabota');
       break;
   case 7: 
       console.log('Denot e Nedela');
       break;
   default:
       console.log('Vnesovte nevaliden den');
}