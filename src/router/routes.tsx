import type { RouteObject } from "react-router-dom";
import App from "../App";
import Pokedex from "../Pokedex";
import Profile from "../Profile";
import RootLayout from "./RootLayout";

const myRoutes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/pokedex",
        element: <Pokedex />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ]
  },

];

export default myRoutes;