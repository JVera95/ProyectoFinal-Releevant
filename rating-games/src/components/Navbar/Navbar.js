import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark font-monospace p-3">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          LOGO
        </NavLink>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-default" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <NavLink to="/toprating" className="navbar-brand">
          Top Rating
        </NavLink>
        <NavLink to="/mylist" className="navbar-brand">
          Mi Lista
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Rating Games
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li>
                <NavLink to="/login" className="dropdown-item text-white">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="dropdown-item text-white">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
