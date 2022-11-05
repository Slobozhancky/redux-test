let defaultState = {
    cash: 0,
};

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export const addCashAction = (payload) => ({type: ADD_CASH, payload});
export const getCashAction = (payload) => ({type: GET_CASH, payload});

export let cashReducer = (state = defaultState, action) => {
    if (action.type === ADD_CASH) {
        return { ...state, cash: state.cash + action.payload };
    } else if (action.type === GET_CASH) {
        return { ...state, cash: state.cash - action.payload };
    }

    return state;
};



