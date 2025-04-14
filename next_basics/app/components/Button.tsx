"use client"
import { useState } from "react";

export function Button(){
    const [message, setMessage] = useState<string | null>(null);

    function handler() {
        setMessage("Button clicked successfully");
    }
    return(
        <>
        <button onClick={handler}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
        Sign in
        </button>
        <div>
            {/* Show message when button is clicked */}
            {message && (
                            <div className="mt-4 text-green-500 text-center font-bold">{message}</div>
            )}
        </div>
        </>
    )
}