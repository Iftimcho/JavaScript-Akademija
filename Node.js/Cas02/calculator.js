function add (x, y) {
    return x + y;
}

function div (x, y) {
    return x / y;
}

function sub (x, y) {
    return x - y;
}

function mul (x , y) {
    return x * y;
}

// Object constructoring (konstrukcija na objekt). Destrukcija pravime tamu kade sto sakame da go iskoristime ovoj objekt
module.exports = {
    add, // add e napisano skrateno bidejki sakame klucot i vrednosta da se isti. da ne pisuvame add: add
    div, // moze da se napise i kako delenje: div ako sakame da se razlicini key i value 
    sub,
    mul
}