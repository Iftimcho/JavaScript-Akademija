const players = [
    {ime: 'Kobe', prezime: 'Bryant', age:40, height: 200},
    {ime: 'Michael', prezime: 'Jordan', age:50, height: 203},
    {ime: 'Chris', prezime: 'Paul', age:34, height: 185},
    {ime: 'Nate', prezime: 'Robinson', age:35, height: 170},
    {ime: 'Shaquille', prezime: 'ONeal', age:46, height: 220},
]

const heightOfPlayers = players.map(player => player.height).reduce((previous, current) => previous + current , 0);

console.log('Prosecnata visina na igracite e : ' + heightOfPlayers/players.length);

// Ova moze da se napravi koga znaeme tocno koj e parametarot koj sakame da go koristime
let temp = players.reduce((previous, curValue) => previous + curValue.height, 0);

console.log(temp/players.length);


// Older than fourty average height
let olderThanArray = players.filter(player => player.age > 40);
let olderThanFourtyHeight = olderThanArray.reduce((prev, curValue) => prev + curValue.height, 0);


console.log('Average height of players older than 40 is: ' + olderThanFourtyHeight/olderThanArray.length);

// za vezba da probame na drugi nacini so reduce, filter da go dobieme istoto resenie od gore

