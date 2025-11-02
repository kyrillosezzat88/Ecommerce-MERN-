import { BreadCrumbLayout, MainLayout } from "@layouts/index";
import { Cart, Checkout, Home, ProductDetails, Shop } from "@pages/index";
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
  {
    path: "/cart",
    element: (
      <BreadCrumbLayout
        title="Cart"
        links={[
          { title: "Home", link: "/" },
          { title: "Shop", link: "/shop" },
          { title: "Cart", link: null },
        ]}
      />
    ),
    children: [
      {
        index: true,
        element: <Cart />,
      },
    ],
  },
  {
    path: "/checkout",
    element: (
      <BreadCrumbLayout
        title="Checkout"
        links={[
          { title: "Home", link: "/" },
          { title: "Shop", link: "/shop" },
          { title: "Checkout", link: null },
        ]}
      />
    ),
    children: [
      {
        index: true,
        element: <Checkout />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
