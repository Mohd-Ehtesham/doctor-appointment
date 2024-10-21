import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  // Log to check the value of isAuthenticated
  console.log("ProtectedRoute isAuthenticated:", isAuthenticated);

  // If the user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected component (children)
  return children;
}
