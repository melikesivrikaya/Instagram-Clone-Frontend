import { createBrowserRouter } from "react-router-dom";
import SideBar from "../pages/home/SideBar";
import Explore from "../pages/explore/Index";
import Login from "../pages/login/Index";
import Register from "../pages/register/Index";
import HomePage from "../pages/home/HomePage";
import Home from "../pages/home/Index";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
    ],
  },
]);
