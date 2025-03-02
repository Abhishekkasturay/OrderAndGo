import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/userSlice"; // Adjust the path as necessary
import UserContext from "../utils/UserContext"; // Import UserContext

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext); // Use UserContext

  const handleSubmit = async (e) => {
    e.preventDefault();
   const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://orderandgo-2.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (result.success) {
      // Assuming success, update your frontend state
      dispatch(login({ username }));
      setLoggedInUser(username); // Update UserContext with logged-in user
      navigate("/"); // Navigate to home page or any other page
    } {
      // No error handling, just log or do nothing
      console.log("Login failed");
    }
  } catch (error) {
    setError("Something went wrong. Please try again.");
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
