import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivitiesForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/activities",
        element: <ActivitiesDashboard />,
      },
      {
        path: "/activities/:id",
        element: <ActivityDetails />,
      },
      {
        path: "/createActivity",
        element: <ActivitiesForm key='create' />,
      },
      {
        path: "/manage/:id",
        element: <ActivitiesForm />,
      }
    ],
  },
]);
