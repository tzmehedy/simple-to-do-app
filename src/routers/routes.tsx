import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
]);

export default router
