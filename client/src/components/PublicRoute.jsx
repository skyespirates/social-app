import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);
  return children;
};

export default PublicRoute;
