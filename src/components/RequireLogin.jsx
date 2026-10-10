
import { Navigate, Outlet, useLocation } from "react-router";

const isLoggedIn = false;

const RequireLogin = () => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireLogin;
