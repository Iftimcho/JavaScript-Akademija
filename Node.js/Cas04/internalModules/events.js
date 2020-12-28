// EventEmitter node znae deka e klasa
const EventEmitter = require('events');

// isntanca od klasata za da koristime metodi od nea

const eventEmiiter = new EventEmitter();

// Event Listener
// so anonimna funkcija
// eventEmiiter.on('logger', function() {
//     console.log('Message logged.');
// });

// so arrow function
eventEmiiter.on('logger', () => {
    console.log('Message logged.');
});

// Raise an event
eventEmiiter.emit('logger');

function isObject(obj)
{
    return obj != null && obj.constructor.name === "Object"
}

// Prvo odat Listenerite koga se pisuvaat i emiterot i listenerot vo ist fajl
eventEmiiter.on('room21', (argEvent) => {
    if (isObject(argEvent))
    {
        console.log('Message is');
        console.log(argEvent);
    }
    else if (Array.isArray(argEvent))
    {
        argEvent.forEach(item => {
            console.log('Item',item);
        })
    }
    else 
    {
        console.log('Invalid type');
    }
});

const message = {
    subject: 'JavaScript Module',
    class: 'Modules',
    lecture: 4,
    students: 12,
    mentor: 'Daniel Peshevski'
};

const messagesData = [
{
    subject: 'JavaScript Module',
    class: 'Modules',
    lecture: 4,
    students: 12,
    mentor: 'Daniel Peshevski'
},
{
    subject: 'JavaScript Module',
    class: 'Modules',
    lecture: 4,
    students: 12,
    mentor: 'Daniel Peshevski'
},
{
    subject: 'JavaScript Module',
    class: 'Modules',
    lecture: 4,
    students: 12,
    mentor: 'Daniel Peshevski'
}
]

// Emitter
eventEmiiter.emit('room21', message);

