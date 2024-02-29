import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const NotFound = () => {
  const user = useSelector((state) => state.email);
  const [target, setTarget] = useState("");
  useEffect(() => {
    if (user) {
      setTarget("/");
    } else {
      setTarget("/login");
    }
  }, [user]);
  return <Navigate to={target} replace />;
};

export default NotFound;
