import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTv } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import { registerUser } from "../redux/actions/userRegisterAction";

import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States to manage form inputs
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    const userData = { email, name, password, role };
    try {
      const result = await dispatch(registerUser(userData));
      console.log(result);
      // Navigate only if the login was successful
      if (result && result.success) {
        navigate("/login");
      } else {
        console.error("Login Failed", result.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setEmail("");
      setName("");
      setPassword("");
      setRememberMe(false);
      setRole("");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 md:mb-[30rem] sm:mb-[20rem] sm:mt-5 xl:w-1/3 lg:mt-10 border-4 border-gray-300 rounded-lg shadow-lg bg-white">
        <Navbar title="Patient System" icon={<FaTv />} />
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
            Sign up to your Account
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full px-8 space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="p-3 mt-1 border rounded-md w-full focus:ring-2 focus:ring-purple-600"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">
                E-Mail Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="p-3 mt-1 border rounded-md w-full focus:ring-2 focus:ring-purple-600"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="p-3 mt-1 border rounded-md w-full focus:ring-2 focus:ring-purple-600"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="role" className="text-sm font-semibold">
                Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                placeholder="Your Role"
                className="p-3 mt-1 border rounded-md w-full focus:ring-2 focus:ring-purple-600"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="form-checkbox h-4 w-4 text-purple-600"
              />
              <label htmlFor="rememberMe" className="text-sm">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300"
            >
              SIGN UP
            </button>
          </form>
          <ToastContainer />
          <NavLink className="text-purple-600 hover:underline mt-4" to="/login">
            Already have an account? Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
