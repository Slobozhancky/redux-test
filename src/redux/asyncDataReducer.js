const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

export const requestingData = () => {
    return { type: REQUESTING_DATA };
};
export const receivedData = (data) => {
    return { type: RECEIVED_DATA, users: data.users };
};

const defaultState = {
    fetching: false,
    users: [],
};

export const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: [],
            };
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users,
            };
        default:
            return state;
    }
};
