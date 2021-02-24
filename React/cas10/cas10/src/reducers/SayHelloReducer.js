const initialState = {
    greeting: "", // ovde definirame promenlivi koi sto ke gi koristime vo komponentite
    goodbye: ""
}

const SayHelloReducer = (state = initialState, action) => {
    switch(action.type) { // go definirame spored tipot na akcijata
        case "SAY_HELLO":
            return {
                ...state, // gi kopirame vrednostite na objektot
                greeting: action.payload
            }
        case "SAY_GOODBYE": 
            return {
                ...state,
                goodbye: action.payload
            }
        default: return state;
    }
}

export default SayHelloReducer;