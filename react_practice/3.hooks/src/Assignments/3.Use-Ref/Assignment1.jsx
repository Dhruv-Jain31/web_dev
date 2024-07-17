import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is 
//clicked, automatically focus the text input field using useRef.

export function Ref_Assignment1() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();   // focuses on specified when page is first re rendered
    }, []);

    const handleButtonClick = () => {
        inputRef.current.focus()
    };

    return (
        <div>
            <input ref={ inputRef } type="text" placeholder="Enter text here" />
            <br></br>
            <br></br>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}
