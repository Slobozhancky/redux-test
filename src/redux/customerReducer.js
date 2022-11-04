let defaultState = {
    customers: [],
};

export let customerReducer = (state = defaultState, action) => {
    if (action.type === "ADD_CUSTOMER") {
        return {
            ...state,
            customers: [...state.customers, action.payload],
        };
    } else if (action.type === "REMOVE_CUSTOMER") {
        return {
            ...state,
            customers: state.customers.filter(
                (customer) => customer.id !== action.payload
            ),
        };
    }

    return state;
};
