import { memo, useCallback } from "react";
import { useState } from "react";

// Create a counter component with increment and decrement functions.
//Pass these functions to a child component which has buttons to perform the increment and decrement actions. 
//Use useCallback to ensure that these functions are not recreated on every render.

export function Callback_Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback( () => {
        setCount(function(count){
            return count + 1;
        })
    }, [])
    // count is passed as a argument in the function we are not accessing it directly.
    // we will not pass count in the dependency array and can skip un-necessary re renders of both variables

    const handleDecrement = useCallback( () => {
        setCount(function(count){
            return count - 1;
        });
    }, []);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    // these buttons should not re render since count is changing only
    // handleIncrement and handleDecrement prop do not change across re renders
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
