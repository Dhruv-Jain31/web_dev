"use client"
import { useState } from "react";

export function SigninComponent() {
    const [message, setMessage] = useState<string | null>(null);

    function handler() {
        setMessage("Button clicked successfully");
    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                {/* Changed <a> to <div> to avoid hydration mismatch */}
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <div>
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">Sign in</div>
                        </div>
                        <div className="pt-2">
                            <LabelledInput label="Username" placeholder="Dhruv@gmail.com" />
                            <LabelledInput label="Password" type="password" placeholder="123456" />
                            <button onClick={handler}
                                type="button"
                                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                            >
                                Sign in
                            </button>
                        </div>
                        {/* Show message when button is clicked */}
                        {message && (
                            <div className="mt-4 text-green-500 text-center font-bold">{message}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
