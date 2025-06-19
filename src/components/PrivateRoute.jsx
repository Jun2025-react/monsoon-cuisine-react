import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // or spinner

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;