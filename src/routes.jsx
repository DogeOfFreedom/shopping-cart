import RedirectToHome from "./RedirectToHome";
import App from "./App";
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
