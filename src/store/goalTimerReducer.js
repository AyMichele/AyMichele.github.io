import {ADD_MONEY} from './actionTypes';
import {CHANGE_MONEY_INPUT} from './actionTypes';


const initialState = {
    moneyNeeded: 5000,
    moneyIGot: 0,
    moneyInput: 0,
    logedIn: -1,
}

function reducer (state = initialState, action){
    switch (action.type) {
        case ADD_MONEY : return {
            ...state,
            moneyIGot: (state.moneyIGot + parseInt(state.moneyInput)),
            moneyInput: 0,
        }
        case CHANGE_MONEY_INPUT: return {
            ...state,
            moneyInput: action.input,
        }
        default:
          return state;
    }      
}

export default reducer;