import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCashAction, getCashAction } from "./redux/cashReducer";
import {
    addCustomerAction,
    removeCustomerAction,
} from "./redux/customerReducer";
import { requestingData, receivedData } from "./redux/asyncDataReducer";

function App() {
    let cashValue = useSelector((state) => state.cashReducer);
    let arrOfCustomers = useSelector((state) => state.customerReducer);
    let asyncResponse = useSelector((state) => state.asyncDataReducer);

    const dispatch = useDispatch();

    const handleAsync = () => {
        return function () {
            dispatch(requestingData());
            setTimeout(function () {
                let data = {
                    users: ["Jeff", "William", "Alice"],
                };
                dispatch(receivedData(data));
            }, 2500);
        };
    };

    let inpForCash = React.useRef();
    let inpForCustomers = React.useRef();

    function addCash(cash) {
        dispatch(addCashAction(cash));
    }

    function getCash(cash) {
        dispatch(getCashAction(cash));
    }

    function addCustomer(customer) {
        let name = { name: customer, id: new Date() };
        dispatch(addCustomerAction(name));
    }

    function removeCustomer(customer) {
        dispatch(removeCustomerAction(customer));
    }

    return (
        <div className="App">
            <h2>Bank operations</h2>
            <p>{cashValue.cash}</p>
            <input ref={inpForCash} type="text" />
            <button onClick={() => addCash(+inpForCash.current.value)}>
                Add cash
            </button>
            <button onClick={() => getCash(+inpForCash.current.value)}>
                Get cash
            </button>
            <br />
            <h2>Operations with customers</h2>
            <p>{arrOfCustomers.customer}</p>
            <input type="text" ref={inpForCustomers} />
            <ul>
                {arrOfCustomers.customers.length < 1 ? (
                    <li>???????????? ????????????</li>
                ) : (
                    arrOfCustomers.customers.map((customer, index) => (
                        <li
                            onClick={() => removeCustomer(customer.id)}
                            key={customer.name + index}
                        >
                            {customer.name}
                        </li>
                    ))
                )}
            </ul>
            <button onClick={() => addCustomer(inpForCustomers.current.value)}>
                Add customer
            </button>
            <h2>Get request from async operation</h2>
            <ul>
                {asyncResponse.users.map((elem, index) => (
                    <li key={elem + index}>{elem}</li>
                ))}
            </ul>
            <button onClick={handleAsync()}>Get async</button>
        </div>
    );
}

export default App;
