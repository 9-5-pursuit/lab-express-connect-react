import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/logs"}>
          Captain's Logs
        </Link>

        <Link to={"/"} className="nav-link">
          Home
        </Link>

        <button className="btn btn-outline-light">
          <Link className="d-flex nav-link" to={"/logs/new"}>
            Create Log
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
