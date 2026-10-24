import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivitiesForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/counter";

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
        element: <ActivityDetailPage />,
      },
      {
        path: "/createActivity",
        element: <ActivitiesForm key='create' />,
      },
      {
        path: "/manage/:id",
        element: <ActivitiesForm />,
      },
      {
        path: "/counter",
        element: <Counter />,
      }
    ],
  },
]);
