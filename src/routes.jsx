import RedirectToHome from "./RedirectToHome";
import Home from "./pages/Home";
import App from "./App";
import Shop from "./pages/Shop";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    index: true,
    element: <RedirectToHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:name",
    element: <App />,
  },
];

export default routes;
