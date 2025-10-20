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
        path: 'allapps', // no leading /
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
    path: '*', // catch-all route outside main layout
    element: <ErrorPage />
  }
]);

export default router;
