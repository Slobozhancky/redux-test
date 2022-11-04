let defaultState = {
    customers: [],
};

export let customerReducer = (state = defaultState, action) => {
    if (action.type === "ADD_CUSTOMER") {
        return { ...state, cash: state.cash + action.payload };
    } else if (action.type === "GET_CUSTOMER") {
        return { ...state, cash: state.cash - action.payload };
    }

    return state;
};
