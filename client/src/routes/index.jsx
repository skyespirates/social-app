import { createBrowserRouter } from "react-router-dom";

// private routes
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Posts from "../pages/Posts";
import Upload from "../pages/Upload";
import Upload2 from "../pages/Upload2";
import MyTicket from "../pages/MyTicket";
import Ticket from "../pages/Ticket";

// public routes
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import NotFound from "../components/NotFound";
import ErrorPage from "../pages/ErrorPage";

import { postsLoader } from "../loaders/posts";
import { ticketsLoader, ticketLoader } from "../loaders/tickets";
import { uploadAction } from "../loaders/upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "posts",
        loader: postsLoader,
        element: <Posts />,
        errorElement: <ErrorPage />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "upload2",
        action: uploadAction,
        element: <Upload2 />,
      },
      {
        path: "tickets",
        loader: ticketsLoader,
        element: <MyTicket />,
      },
      {
        path: "tickets/:ticketId",
        loader: ticketLoader,
        element: <Ticket />,
      },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
