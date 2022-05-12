import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const auth = JSON.parse(window.localStorage.getItem("loggedIn"));
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
