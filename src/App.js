import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
    let store = useSelector((state) => state);
    const dispatch = useDispatch();

    let inp = React.useRef();

    function addCash(cash) {
        dispatch({ type: "ADD_CASH", payload: cash });
    }

    function getCash(cash) {
        dispatch({ type: "GET_CASH", payload: cash });
    }
    return (
        <div className="App">
            <h1>Hello</h1>
            <p>{store.cash}</p>
            <input ref={inp} type="text" />
            <button onClick={() => addCash(+inp.current.value)}>
                Add cash
            </button>
            <button onClick={() => getCash(+inp.current.value)}>
                Get cash
            </button>
        </div>
    );
}

export default App;
