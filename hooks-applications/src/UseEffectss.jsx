
import { useEffect, useState } from "react";
function UseEffectss() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        callOnce();
    },[])
    function callOnce() {
        console.log("callOnce Function is called");
    }
    // callOnce();
    return (

        <div>
            <h1>useEffectss</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
        </div>
    )
}
export default UseEffectss
