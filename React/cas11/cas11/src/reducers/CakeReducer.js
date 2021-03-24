import {BUY_CAKE} from './../constants/CakeConstants';
import {RESTOCK_CAKES} from './../constants/CakeConstants';
const initialState = {
    cakes: 10,
    message: undefined
}

const CakeReducer = (state = initialState, action ) => {
    switch(action.type){
        case BUY_CAKE:
            if(state.cakes - action.payload < 0)
            {
                return {
                    ...state,
                    message: `Not enough cakes only ${state.cakes} left`
                }
            } else {
                return {
                ...state,
                cakes: state.cakes - action.payload,
                message: undefined
                }
            }
        case RESTOCK_CAKES:
            if(state.cakes + action.payload > 10){
                return {
                    ...state,
                    // message: 'Can not restock more than 10 cakes'
                    message: `Number of cakes ${state.cakes + action.payload}`
                }
            } else {
                return{
                    ...state,
                    cakes: Number(state.cakes) + Number(action.payload),
                    message: undefined
                }
            }
            
        default: return state;
    }
}

export default CakeReducer;