import { BreadCrumbLayout, MainLayout } from "@layouts/index";
import { Home, ProductDetails, Shop } from "@pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/shop",
    element: (
      <BreadCrumbLayout
        title="Shop"
        links={[
          { title: "Home", link: "/" },
          { title: "Shop", link: null },
        ]}
      />
    ),
    children: [
      {
        index: true,
        element: <Shop />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
