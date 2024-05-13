import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops, looks like you got lost</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
