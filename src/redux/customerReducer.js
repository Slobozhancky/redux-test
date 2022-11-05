let defaultState = {
    customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});

export let customerReducer = (state = defaultState, action) => {
    if (action.type === ADD_CUSTOMER) {
        return {
            ...state,
            customers: [...state.customers, action.payload],
        };
    } else if (action.type === REMOVE_CUSTOMER) {
        return {
            ...state,
            customers: state.customers.filter(
                (customer) => customer.id !== action.payload
            ),
        };
    }

    return state;
};


