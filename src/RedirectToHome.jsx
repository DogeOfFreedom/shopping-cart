import { Navigate } from "react-router-dom";

const RedirectToHome = () => {
  return (
    <>
      <Navigate to="/home" />
    </>
  );
};

export default RedirectToHome;
