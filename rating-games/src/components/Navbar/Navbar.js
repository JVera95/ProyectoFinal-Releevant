import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="btn-group mt-5 pl-1">
      <NavLink to="/" className="btn btn-light">
        Inicio
      </NavLink>
      <NavLink to="/ps" className="btn btn-primary">
        PlayStation
      </NavLink>
      <NavLink to="/xbox" className="btn btn-success">
        Xbox
      </NavLink>
      <NavLink to="/nint" className="btn btn-danger">
        Nintendo
      </NavLink>
      <NavLink to="/pc" className="btn btn-dark">
        PC
      </NavLink>
      <NavLink to="/game" className="btn btn-warning">
        Game
      </NavLink>
      <NavLink to="/toprating" className="btn btn-warning">
        Top Rating
      </NavLink>
      <NavLink to="/login" className="btn btn-info">
        Login
      </NavLink>
      <NavLink to="/register" className="btn btn-info">
        Register
      </NavLink>
    </div>
  );
}
