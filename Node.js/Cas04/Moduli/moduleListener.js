// const eventListener = require('./moduleEmitter');
// var EventEmitter = require('events');
// // isntanca od klasata za da koristime metodi od nea
// var ee = new EventEmitter();
// // console.log('Something');
const EventEmitter = require('events');
const Test = require('./moduleEmitter');
const listener = new Test();

listener.on('room21', (argEvent) => {
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

function isObject(obj)
{
    return obj != null && obj.constructor.name === "Object"
}

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
];

listener.sendMessage(messagesData);