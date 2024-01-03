import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import Favorites from "./pages/Favorites/Favorites";
import Homepage from "./pages/Homepage/Homepage";
import UserProfil from "./pages/UserProfil/UserProfil";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
      {
        path: "/userprofil",
        element: <UserProfil />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
