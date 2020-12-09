let niza = [
    {
        ime: "Nekoe ime",
        prezime: "Nekoe prezime",
        godini: 10
    },
    {
        ime: "Sanja",
        prezime: "Taskovska",
        godini: 26
    },
    {
        ime: "Timce",
        prezime: "Pop-Icovski",
        godini: 26
    },
    {
        ime: "Riste",
        prezime: "Tanev",
        godini: 27
    },
    {
        ime: "Ivona",
        prezime: "Ramneshova",
        godini: 25
    },
    {
        ime: "Ljubica",
        prezime: "Pendeva",
        godini: 20
    }
]

// Prototyp fukcii

function Rabbit(type, color){
    this.type = type;
    this.color = color;
}


Rabbit.prototype.speak = (phrase) => {
    console.log(phrase);
}

let zajak = new Rabbit("Wild", "Brown");

zajak.speak("zdravo");

let zajak1 = new Rabbit("Polar", "white");

console.log(zajak1.color);

let zajaci = [zajak, zajak1];

// ako prethodno ne e definirano koi svojstva tocno ke gi ima prototyp funkciite, togas moze da si dodavame parametri na objektite koi gi kreirame od taa prototypfunkcija

zajak.ime = "Timce";


//              KLASI


class Avtobus {
    marka = "Mercedes";
    boja = "Siva";
    godina = "2010";
    constructor(marka, boja, godina){
        this.marka = marka;
        this.boja = boja;
        this.godina = godina;
    }

    pecati(){
        console.log(`Avtobusot e od marka ${this.marka} so boja ${this.boja} e proizveden vo ${this.godina}`);
    }
}

let avtobus1 = new Avtobus("Mercedes", "Bela", 2015);
let avtobus2 = new Avtobus("Yutong", "Crvena", 2005);

let avtobusi = [new Avtobus("Skanija","Sina", 2008), avtobus1, avtobus2];

for (avtobus of avtobusi)
{
    avtobus.pecati();
}

// console.log(avtobus3);

class Minibus extends Avtobus {
    constructor(marka, boja, godina, registracija){
        super(marka,boja,godina);
        this.registracija = registracija;
    }

    getRegistracija(){
        console.log(this.registracija);
    }
}


let miniBus = new Minibus('Mercedes', 'Zolta', '2012', 123456);

miniBus.pecati();
miniBus.getRegistracija();