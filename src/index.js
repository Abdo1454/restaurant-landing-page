import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllMenu from "./AllMenu/AllMenu";
import AllAbout from "./AllAbout/AllAbout";
import AllBook from "./AllBook/AllBook";
import AllData from "./AllData/AllData";
import SingleProducts from "./SingleProducts/SingleProducts";
import AllCart from "./Cart/AllCart";
import {CartProvider} from "react-use-cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "menu",
    element: <AllMenu />,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "book",
    element: <AllBook />,
  },
  {
    path: "product/:id",
    element: <SingleProducts />,
  },
  {
    path: "cart",
    element: <AllCart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <AllData>
      <RouterProvider router={router} />,
    </AllData>
  </CartProvider>,
);
