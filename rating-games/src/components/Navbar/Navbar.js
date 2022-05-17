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
            <NavLink to={"/mylist"} className="navbar-brand navlink">
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
              <img
                src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png"
                alt="profile-pic"
                className="profilenavbar"
              />
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
