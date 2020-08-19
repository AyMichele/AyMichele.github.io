import {createStore} from 'redux';



const ADD_MONEY = "ADD_MONEY"
const initialState = {
    moneyIGot: 100,
}

const addMoney = (betrag) => {
    return {
        type: ADD_MONEY,
        betrag: betrag
    }
}

function reducer (state = initialState, action){
    switch (action.type) {
        case 'ADD_MONEY': return {
            ...state,
            moneyIGot: (state.moneyIGot + action.betrag )
        }
          
        default:
          return state;
    }      
}


const moneyStore = createStore(reducer);
const unsubscribe = moneyStore.subscribe(() => alert("state update => money i got " + " " +  moneyStore.getState().moneyIGot))
moneyStore.dispatch(addMoney(50));
moneyStore.dispatch(addMoney(50));
unsubscribe();






export {moneyStore};
export {addMoney};