import { useState, useEffect, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered.
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Ref_Assignment2() {
    const [, forceRender] = useState(0);

    const number_of_rerenderes = useRef(0);  // it is used not only to store DOM elements but also
    // normal elements apart from state variables whose value will not change across re renders

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    useEffect(() => {
        // Increment the count after the component has rendered
        number_of_rerenderes.current += 1;
    });

    //When running in development mode with React.StrictMode, React intentionally
    // double-invokes certain lifecycle methods (including useEffect) to help identify any side effects.
    //so we have to wrap it inside a useeffect

    return (
        <div>
            <p>This component has rendered {number_of_rerenderes.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}