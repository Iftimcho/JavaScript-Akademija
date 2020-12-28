const EventEmitter = require('events');

// isntanca od klasata za da koristime metodi od nea

class Test extends EventEmitter {
    sendMessage(message)
    {
        this.emit('room21', message);
    }
}

module.exports = Test;
