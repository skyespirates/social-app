import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

// pages
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

import store from "../store";
import { login } from "../slices/userSlice";

export const links = [];

// check is there user who currently login, if not go to login page
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  store.dispatch(login(user));
} else {
  history.push("/login");
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
