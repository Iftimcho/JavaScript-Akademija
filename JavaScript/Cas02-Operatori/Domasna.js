var day = prompt('Enter your day...')
var dayNumber = 0;

if (day == "Ponedelnik"){
    dayNumber = 1;
}

else if (day == "Vtornik"){
    dayNumber = 2;
}

else if (day == "Sreda"){
    dayNumber = 3;
}

else if (day == "Cetvrtok"){
    dayNumber = 4;
}

else if (day == "Petok"){
    dayNumber = 5;
}

else if (day == "Sabota"){
    dayNumber = 6;
}

else if (day == "Nedela"){
    dayNumber = 7;
}

else {
    dayNumber = 0;
}

console.log(day + ' e ' + dayNumber + ' den od nedelata.');