import { MainLayout } from "@layouts";
import { createBrowserRouter } from "react-router-dom";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
    ],
  },
]);

export default AppRouter;
