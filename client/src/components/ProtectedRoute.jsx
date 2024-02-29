import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === undefined) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);
  return children;
};

export default ProtectedRoute;
