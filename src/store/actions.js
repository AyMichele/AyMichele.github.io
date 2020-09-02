import {ADD_MONEY} from './actionTypes';
import {CHANGE_MONEY_INPUT} from './actionTypes';


const addMoney = () => {
    return {
        type: ADD_MONEY,
    }
}

const changeMoneyInput = (input) =>{
    return {
        type: CHANGE_MONEY_INPUT,
        input: input
    }
}


export {addMoney};
export {changeMoneyInput};