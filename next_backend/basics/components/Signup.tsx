"use client"
// Import React's useState hook to handle local state
import { useState, useEffect } from "react";

// Import axios for making HTTP requests
import axios from "axios";

// Signup component definition
export function Signup() {
  // State for storing the input username
  const [username, setUsername] = useState("");

  // State for storing the input password
  const [password, setPassword] = useState("");

  // Flag to make sure component only renders on client
  const [hasMounted, setHasMounted] = useState(false);

  // Set flag true when component mounts (client only)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Prevent hydration errors by skipping SSR render
  if (!hasMounted) {
    return null;
  }

  // Function to handle signup when button is clicked
  const handleSignup = async () => {
    try {
      // Sending a POST request to the backend with username and password
      const response = await axios.post("http://localhost:3000/api/user", {
        username,
        password,
      });

      // Logging success response (you can replace this with a success toast or navigation)
      console.log("User signed up successfully:", response.data);
    } catch (error) {
      // Logging the error if request fails (replace this with user-friendly error messages)
      console.error("Signup failed:", error);
    }
  };

  // Return JSX (UI) to render the signup form
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      {/* Signup form container */}
      <div className="p-6 border rounded shadow-md bg-white w-80">

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>

        {/* Input for username */}
        <input
          onChange={(e) => setUsername(e.target.value)} // Set state when user types
          className="p-2 m-2 w-full border rounded" // Tailwind styling
          type="text"
          placeholder="Username"
        />

        {/* Input for password */}
        <input
          onChange={(e) => setPassword(e.target.value)} // Set state when user types
          className="p-2 m-2 w-full border rounded" // Tailwind styling
          type="password"
          placeholder="Password"
        />

        {/* Signup button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleSignup} // Call handleSignup when clicked
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" // Tailwind styling
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
