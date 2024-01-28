import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import Favorites from "./pages/Favorites/Favorites";
import Homepage from "./pages/Homepage/Homepage";
import UserProfile from "./pages/UserProfile/UserProfile";
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
        path: "/favorites/:id",
        element: <Favorites />,
      },
      {
        path: "/recipe/:recipeId",
        element: <Recipe />,
      },
      {
        path: "/profile/:userId",
        element: <UserProfile />,
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
