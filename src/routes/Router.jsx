import { createBrowserRouter } from "react-router-dom";
import Layout from "../rootLayout/Layout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />
    },
  ]);


export default router;