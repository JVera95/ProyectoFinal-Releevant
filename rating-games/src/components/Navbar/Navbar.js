import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import logo from "./logoblanco2.png";

export default function Navbar() {
  const { auth, logout } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  console.log({ auth });
  return (
    <nav
      className="navbar navbar-dark bg-dark font-monospace"
      style={{ opacity: 0.8 }}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="..." width="50%" />
        </NavLink>
        <NavLink to="/toprating" className="navbar-brand navlink">
          Top Valorados
        </NavLink>
        {auth ? (
          <>
            <NavLink to="/mylist" className="navbar-brand navlink">
              Mi Lista
            </NavLink>
            <NavLink
              to="/login"
              onClick={handleClick}
              className="navbar-brand navlink"
            >
              Cerrar Sesión
            </NavLink>
            <NavLink to={`/profile/${auth._id}`} replace>
              <button type="button" class="btn btn-light btn-circle btn-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="navbar-brand navlink">
              Iniciar Sesión
            </NavLink>
            <NavLink to="/register" className="navbar-brand navlink">
              Registrarse
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
