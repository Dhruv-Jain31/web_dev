import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Memo_Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(function(){
        let value = 1;
        for (let i = 1; i<=input; i++){
            value = value * i
        }
        return value
    }, [input]);
    // Your solution ends here

    console.log(expensiveValue);

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
                /*This is an event handler that updates the INPUT state variable whenever
                the user changes the value in the input field.*/
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}