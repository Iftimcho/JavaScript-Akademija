export const sayHello = () => { // action creator
    return { // kreirame objekt action {type:, payload:}
        type: 'SAY_HELLO',
        payload: 'Hello and welcome to react redux'
    }
}

export const sayGoodbye = () => {
    return {
        type: 'SAY_GOODBYE',
        payload: 'Thank you for your time. Goodbye!'
    }
}

