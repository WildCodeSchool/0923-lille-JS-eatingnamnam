import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import Favorites from "./pages/Favorites/Favorites";
import Homepage from "./pages/Homepage/Homepage";
import UserProfil from "./pages/UserProfil/UserProfil";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Authentication from "./pages/Authentication/Authentication";

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
        path: "/profile",
        element: <UserProfil />,
      },
      {
        path: "/add/recipe",
        element: <AddRecipe />,
      },
      {
        path: "/login",
        element: <Authentication />,
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
