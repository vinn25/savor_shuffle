import { useRoutes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
}
