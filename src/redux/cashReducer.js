let defaultState = {
    cash: 0,
};

export let cashReducer = (state = defaultState, action) => {
    if (action.type === "ADD_CASH") {
        return { ...state, cash: state.cash + action.payload };
    } else if (action.type === "GET_CASH") {
        return { ...state, cash: state.cash - action.payload };
    }

    return state;
};
