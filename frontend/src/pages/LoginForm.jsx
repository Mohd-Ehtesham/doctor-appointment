import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaTv } from "react-icons/fa";
import { loginUser } from "../redux/actions/userLoginAction";
import Navbar from "../components/Navbar";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password, rememberMe };

    try {
      const result = await dispatch(loginUser(userData)); // Wait for the login result
      console.log(result);

      // Navigate only if the login was successful
      if (result && result.success) {
        navigate("/myProfile");
      } else {
        console.error("Login Failed", result.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      // Reset form fields
      setEmail("");
      setPassword("");
      setRememberMe(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl border-4 border-gray-300 rounded-lg shadow-lg bg-white">
        <Navbar title="Patient System" icon={<FaTv />} />
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Log in to your Account
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full px-8 space-y-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm md:text-base font-semibold"
              >
                E-Mail Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="p-3 mt-1 border rounded-md w-full focus:ring-2 focus:ring-purple-600 text-sm md:text-base"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm md:text-base font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="p-3 mt-1 border rounded-md w-full focus:ring-2 focus:ring-purple-600 text-sm md:text-base"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 text-sm md:text-base"
            >
              Login
            </button>
          </form>
          <ToastContainer />
          <NavLink
            className="text-purple-600 hover:underline mt-4 text-sm"
            to="/"
          >
            New to app? Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
