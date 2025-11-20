import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'allapps', 
        element: <AllApps />
      },
      {
        path: 'installation',
        element: <Installation />
      },
      {
        path: 'appDetails/:id',
        element: <AppDetails />
      }
    ]
  },
  {
    path: '*', 
    element: <ErrorPage />
  }
]);

export default router;
