import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectToHome from "./RedirectToHome";
import Home from "./Home";
import App from "./App";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    index: true,
    element: <RedirectToHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
];

export default routes;
