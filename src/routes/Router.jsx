import { createBrowserRouter } from "react-router-dom";
import Layout from "../rootLayout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
