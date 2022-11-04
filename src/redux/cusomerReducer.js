let defaultState = {
    customers: [],
};

let customerReducer = (state = defaultState, action) => {
    console.log({ ...state });
    if (action.type === "ADD_CUSTOMER") {
        return { ...state, cash: state.cash + action.payload };
    } else if (action.type === "GET_CUSTOMER") {
        return { ...state, cash: state.cash - action.payload };
    }

    return state;
};

export default customerReducer;