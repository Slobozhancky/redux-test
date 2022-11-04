let defaultState = {
    cash: 0,
};

let cashReducer = (state = defaultState, action) => {
    if (action.type === "ADD_CASH") {
        return { ...state, cash: state.cash + action.payload };
    } else if (action.type === "GET_CASH") {
        return { ...state, cash: state.cash - action.payload };
    }

    return state;
};

export default cashReducer;
